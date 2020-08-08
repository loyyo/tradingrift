import React, { useState, useRef, useEffect } from 'react';

const Accordion = (props) => {
	const [active, setActive] = useState(false);
	const contentRef = useRef(null);

	useEffect(() => {
		contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px';
	}, [contentRef, active]);

	const toggleActive = () => {
		setActive(!active);
	};

	const titleStyle = {
		fontWeight: 600,
		fontSize: '24px',
		color: '#0c1323',
	};

	return (
		<div className='accordion-section'>
			<button className='accordion-title' onClick={toggleActive}>
				<p style={titleStyle}>{props.title}</p>
				<span className={active ? 'accordion-icon rotate' : 'accordion-icon'}>{'>'}</span>
			</button>

			<div ref={contentRef} className={active ? 'accordion-content' : 'accordion-content-hidden'}>
				{props.children}
			</div>
		</div>
	);
};

export default Accordion;
