import React from 'react';

const ContentInfroduction = (props) => {
	return (
		<div className={props.className}>
			<h3>{props.first}</h3>
			<p>{props.second}</p>
			<p>{props.third}</p>
		</div>
	);
};

ContentInfroduction.defaultProps = {
	className: 'content-introduction-field',
};

export default ContentInfroduction;
