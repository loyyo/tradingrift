import React, { useState, useEffect } from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';

const ScrollToTop = () => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			if (window.pageYOffset > 300) {
				setActive(true);
			} else {
				setActive(false);
			}
		});
	}, [window.pageYOffset]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className={active ? 'scroll-to-top' : 'scroll-to-top off'} onClick={scrollToTop}>
			<BsChevronDoubleUp />
		</div>
	);
};

export default ScrollToTop;
