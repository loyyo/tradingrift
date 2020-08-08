import React, { useState } from 'react';

const Testimonials = () => {
	const reviews = [
		{
			client: 'Client nr1',
			date: 'Jul 25, 2019',
			quote:
				'Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi, malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis magna.',
		},
		{
			client: 'Client nr2',
			date: 'Feb 1, 2069',
			quote:
				'Proin mollis scelerisque dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin sollicitudin semper tellus, sit amet vehicula metus venenatis ac.',
		},
		{
			client: 'Client nr3',
			date: 'Mar 3 2015',
			quote:
				'In eleifend ex ac ultricies bibendum. Duis in leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae tristique nisl.',
		},
		{
			client: 'Client nr4',
			date: 'Jan 6, 2020',
			quote:
				'Suspendisse mattis, nibh ut pellentesque feugiat, augue augue bibendum augue, quis rutrum tortor velit vel elit.',
		},
		{
			client: 'Client nr5',
			date: 'Jan 12 2020',
			quote:
				'Maecenas tristique, velit nec ultricies consectetur, justo libero rutrum dui, vel convallis massa purus id nisi. Aliquam at egestas nisi.',
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
