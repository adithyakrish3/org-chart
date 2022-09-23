import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Parent from './parent';
import Search from './search';

import { setInitValue } from '../../redux/actions/init';
import { setSearchInfo } from '../../redux/actions/search';
import { data } from '../../server/server';
import { dataForListView } from '../../utils/utils';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '60px',
		backgroundColor: '#f8f8f8',
		alignItems: 'center',
		textAlign: 'left',
		[theme.breakpoints.up('md')]: {
			justifyContent: 'center'
		},
		[theme.breakpoints.down('md')]: {
			padding: '0px 30px'
		},
	},
	card: {
		padding: '20px 20px',
		width: '100%',
		overflow: 'scroll',
		[theme.breakpoints.up('md')]: {
			border: '1px solid #acacac',
			borderRadius: 5,
		}
	},
	search: {
		margin: '10px 0 20px 0',
		paddingRight: '10px'
	},
	noResults: {
		textAlign: 'center',
		fontSize: '12px'
	}
}))

const Body = (props) => {
	const classes = useStyles();
	const { init, search, dispatch, alter } = props;

	const [isSearching, setIsSearching] = useState(false)
	const [ searchData, setSearchData ] = useState([])
	const [obj, setObj] = useState({})
	//console.log(search)

	useEffect(() => {
		let newObj;

		if(alter && alter.default)
			newObj = dataForListView(data);
		else {
			newObj = dataForListView(alter);
		}
		
		dispatch(setInitValue(newObj));
		setObj(newObj)
	}, [alter])

	useEffect(() => {
	    if(!init.default && searchData.length === 0 && Object.keys(obj).length > 0) {
	      	const response = []

	      	Object.keys(obj).forEach(d => {
	        	obj[d].forEach(name => {
	          		response.push(`${name}_${d}`)
	        	})
	      	})

	      	setSearchData(response)
	    }
	 })

	const onSearch = (text) => {
		if(text.length > 0) {
			setIsSearching(true)
		}
		else {
			setIsSearching(false)
			dispatch(setSearchInfo({}))
		}

		let temp = searchData.filter((s) => s.toLowerCase().includes(text.toLowerCase()))

		const searchObj = {}
		temp.forEach((tem) => {
			const [child, parent] = tem.split('_')
			if(searchObj[parent]){
				searchObj[parent].push(child)
			}
			else {
				searchObj[parent] = [ child ]
			}
		})

		dispatch(setSearchInfo(searchObj))
	}

	return (
		<div className={classes.root}>
			{!init.default && <div className={classes.card}>
				<Search style={classes.search} onSearch={onSearch}/>
				{!isSearching && Object.keys(init).map((key) => {
					return <Parent key={key} name={key} data={init[key]} disableCheck={false} />
				})}
				{isSearching && <div>
					{JSON.stringify(search) !== JSON.stringify({}) && Object.keys(search).map((key) => {
						return <Parent key={key} name={key} data={search[key]} disableCheck={true} />
					})}
					{JSON.stringify(search) === JSON.stringify({}) && <div className={classes.noResults}>
						<span>No results found!</span>
					</div>}
				</div>}
			</div>}
		</div>
	)
}


const mapStateToProps = state => ({
  init: state.init,
  search: state.search,
  alter: state.alter
})

export default connect(mapStateToProps)(Body);