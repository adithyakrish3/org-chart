import React, { useRef, useEffect } from "react";
import { connect } from 'react-redux';

import { setAlterValue } from '../redux/actions/alter';
import { arrayToChartObject } from '../utils/utils';
import Card from './card';

const Chart = (props) => {
	const [chart, setChart] = React.useState([]);
	const dragItem = useRef();
	const { data } = props;
	
	useEffect(() => {
		if(data?.length) {
			setChart(data)
		}
	}, [data])

	const dragStart = (id) => {
		dragItem.current = id;
	}

	const alterData = (parent) => {
		let newChart = [ ...chart];
		const parentObj = newChart.find(n => n.id === parent);

		newChart.forEach(ch => {
			if(ch.id === dragItem.current) {
				ch.parent = parent;
				ch.team = parentObj.team;
			}
		})

		newChart.forEach((n) => {
			const parentObj = newChart.find(o => o.id === n.parent)
			if(n.parent && parentObj.team !== 'All') {
				n.team = parentObj.team
			}
		})

		setChart(newChart)
		props.dispatch(setAlterValue(newChart))
	}

  return (
    <div className="org-tree">
      	<Card
      		data={arrayToChartObject(chart)}
      		dragStart={dragStart}
      		alterData={alterData}
      	/>
    </div>
  );
};

const mapStateToProps = state => ({
  init: state.init,
  search: state.search
})

export default connect(mapStateToProps)(Chart);;