import React from 'react';

const ContentInfroduction = (props) => {
	return (
		<div className='content-introduction-field'>
			<h3>{props.first}</h3>
			<p>{props.second}</p>
			<p>{props.third}</p>
		</div>
	);
};

export default ContentInfroduction;
