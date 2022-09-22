import React, { Fragment } from "react";
import Tooltip from "./tooltip/tooltip";

const Card = (props) => {
	const [dropItem, setDropItem] = React.useState(null)
	const { dragStart, alterData, data } = props;

	const onDragStart = (e, id) => {
		dragStart(id)
	}

	const onDragOver = (e, id) => {
		e.preventDefault();
		if(dropItem !== id) {
			setDropItem(id)
			alterData(id)
		}
	}

  return (
    <ul>
      	{data.map((item,index) => (
        	<Fragment key={item.name}>
          		<li>
          			<Tooltip
          				name={item.name}
          				designation={item.designation}
          				id={item.id}
          				direction="top" 
          				key={item.id}
          			>
	            		<div className="card"
			            	draggable 
			            	onDragStart={(e) => onDragStart(e, item.id)}
			            	onDragOver={(e) => onDragOver(e, item.id)}
	            		>
	              			<div className="card-body" key={item.id}>
	                			<div>{item.name}</div>
	                			<div>{item.designation}</div>
	              			</div>
	            		</div>
	            	</Tooltip>
	            		{item.children && item.children.length > 0 && <Card 
	            			data={item.children}
	            			alterData={props.alterData}
	            			dragStart={props.dragStart}
	            		/>}
          		</li>
        	</Fragment>
      	))}
    </ul>
  );
};

export default Card;