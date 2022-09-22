import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '20px'
	}
}))

const Search = (props) => {
	const classes = useStyles();

	const onSearch = (event) => {
		props.onSearch(event.target.value)
	}

	return (
		<div className={props.style}>
			<input type="text" placeholder="Search ..." className={classes.root} onChange={onSearch}/>
		</div>
	)
}

export default Search;