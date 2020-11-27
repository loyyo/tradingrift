import React from 'react';
import { Link } from 'react-router-dom';

//
const SellCTA = () => {
	return (
		<div className='sellcta'>
			<div className='ctatext'>
				<div className='banner'>
					<h3>Masz konto, którego nie potrzebujesz?</h3>
					<p>U nas sprzedasz je szybciej i łatwiej! Współpraca z nami to pewność uczciwej ceny!</p>
				</div>
			</div>
			<Link to='/sprzedaj'>
				<div className='ctaimg-container' />
			</Link>
		</div>
	);
};

export default SellCTA;
