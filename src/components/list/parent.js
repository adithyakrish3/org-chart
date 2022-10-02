import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Child from './child';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setTeamSelected } from '../../redux/actions/selection';

const useStyles = makeStyles((theme) => ({
	card: {
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			justifyContent: 'center'
		}
	},
	check: {
		margin: '10px 15px 10px 10px',
		cursor: 'pointer',
	},
	header: {
		fontSize: '14px',
		fontWeight: 600,
	},
	collapse: {
		cursor: 'pointer',
		paddingRight: '15px'
	}
}))

const Parent = (props) => {
	const classes = useStyles();
	const { name, data, selection, disableCheck, alter, expandMenu } = props;

	const [selected, setSelected] = useState([])
	const [parentSelection, setParentSelection] = useState(false)
	const [isExpanded, setExpanded] = useState(false)

	useEffect(() => {
		setExpanded(expandMenu)
	}, [expandMenu])

	const onChange= () => {
		if(!disableCheck) {
			if(parentSelection) {
				setSelected([])
				setParentSelection(false)
				props.dispatch(setTeamSelected({default: true}))
			}
			else {
				const temp = []
				data.forEach(d => temp.push(d))

				props.dispatch(setTeamSelected(name))
				setSelected(temp)
				setParentSelection(true)
			}
		}
	}

	const onToogle = () => {
		setExpanded(!isExpanded)
	}

	return (
		<div>
			<span className={classes.collapse} onClick={onToogle}>{isExpanded ? <CaretUpOutlined /> : <CaretDownOutlined />}</span>
			<input
				type="checkbox"
				disabled={disableCheck || !alter.default}
				onChange={onChange}
				className={classes.check}
				checked={selection === name}
				ref={input => {
			        if (input) {
			          	input.indeterminate = (selected.length > 0 && selected.length !== data.length);
			        }
			    }}
			/>
			<span className={classes.header}>{name}</span>
			{(parentSelection || isExpanded) && data.length > 0 && <div className="children">
				{data.map((d, index) => (
					<Child name={d} key={index} />
				))}
			</div>}
		</div>
	)
}

const mapStateToProps = state => ({
  init: state.init,
  search: state.search,
  selection: state.selection,
  alter: state.alter
})

export default connect(mapStateToProps)(Parent);