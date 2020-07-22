import React, { useState } from 'react';

const Herov2 = ({ children }) => {
	const [hero, setHero] = useState('roomsHerov1');
	setTimeout(() => {
		if (hero === 'roomsHerov1') {
			setHero('roomsHerov2');
		} else setHero('roomsHerov1');
	}, 20000);
	return <div className={hero}>{children}</div>;
};

export default Herov2;
