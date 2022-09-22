import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';

import Chart from './chart';
import Body from './list/body';
import { data } from '../server/server'

const Parent = (props) => {
  const { selection } = props;
  const [obj, setObj] = useState([])

  useEffect(() => {
    let newData;
    if(selection  && !selection.default) {
      newData = data.filter(n => n.team === selection || n.team === 'All')
      setObj(newData)
    }
    else {
      setObj(data)
    }
  }, [selection])

  useEffect(() => {
    const newData = [ ...data ]
    setObj(newData)
  }, [])

  return (
    <div className="App">
      <div className="parent">
        <div style={{ paddingRight: '50px' }}>
          <Body />
        </div>
        <div>
          <Chart data={obj} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  init: state.init,
  search: state.search,
  selection: state.selection
})

export default connect(mapStateToProps)(Parent);
