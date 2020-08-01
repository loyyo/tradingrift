import React, { useState } from 'react';
import { css } from 'emotion';

const Testimonials = () => {
	const reviews = [
		{
			client: 'JożinKurwaZbażin',
			date: 'Jul 25, 2019',
			quote:
				'Panowie zrobili mi w LoLu tak dobrze, że jeszcze nikt mi w życiu tak dobrze nie zrobił.',
		},
		{
			client: 'MaciekZKlanu',
			date: 'Feb 1, 2069',
			quote: 'Legue of legents, hyhyhy',
		},
		{
			client: 'KońskiZad',
			date: 'Mar 3 2015',
			quote: 'Dobre to mocie po wsi lotać.',
		},
		{
			client: 'StaryCap',
			date: 'Jan 6, 2020',
			quote: 'Dejcie mnie to za darmo.',
		},
		{
			client: 'DychaNaGodzinę',
			date: 'Jan 12 2020',
			quote: 'Za normalną robotę byście się wzieli!',
		},
	];

	const [active, setActive] = useState(0);

	const autoChangeTestimonials = setTimeout(() => {
		if (active >= 4) {
			setActive(0);
		} else {
			setActive(active + 1);
		}
	}, 5000);

	let changeTestimonialsRight = () => {
		if (active >= 4) {
			setActive(0);
		} else {
			setActive(active + 1);
		}
		clearTimeout(autoChangeTestimonials);
	};

	let changeTestimonialsLeft = () => {
		if (active <= 0) {
			setActive(4);
		} else {
			setActive(active - 1);
		}
		clearTimeout(autoChangeTestimonials);
	};

	return (
		<div className='testimonials-all'>
			<h2>Testimonials</h2>
			<div className='testimonials-left-arrow'>
				<p id='leftArrow' onClick={changeTestimonialsLeft}>
					&#10139;
				</p>
			</div>
			<div className='testimonials-right-arrow'>
				<p id='rightArrow' onClick={changeTestimonialsRight}>
					&#10139;
				</p>
			</div>
			<div style={{ clear: 'both' }}></div>
			<div className='testimonials-client'>
				<p>{reviews[active].client}</p>
			</div>
			<div className='testimonials-date'>
				<p>{reviews[active].date}</p>
			</div>
			<div className='testimonials-quote'>
				<p>{reviews[active].quote}</p>
			</div>
		</div>
	);
};

export default Testimonials;

/*Object.keys(reviews).map((index) => (
	<span onClick={(event) => handleSetClick(event)} data-quote={index} key={index} />
))*/
