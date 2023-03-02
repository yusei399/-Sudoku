import React from "react";

const List = ({ items }) => {
  return (
	<div className='shopping-list'>
		<ul>
			{items.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
			<li>Instagram</li>
			<li>WhatsApp</li>	
			<li>Oculus</li>
		</ul>
	</div>
  );
}

export default List;