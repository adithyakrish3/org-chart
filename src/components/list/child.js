import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowRightOutlined } from '@ant-design/icons';

const useStyles = makeStyles((theme) => ({
	check: {
		margin: '10px 25px 10px 40px',
		cursor: 'pointer'
	},
	header: {
		fontSize: '14px',
		fontWeight: 600,
		paddingLeft: '15px'
	}
}))

const Child = (props) => {
	const classes = useStyles();
	const { name } = props;

	return (
		<div style={{ padding: '5px'}}>
			<ArrowRightOutlined style={{ paddingLeft: '10px' }}/>
			<span className={classes.header}>{name}</span>
		</div>
	)
}

export default Child;