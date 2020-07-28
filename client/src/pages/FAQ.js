import React from 'react';
import Hero from '../components/Herov2';
import Banner from '../components/Banner';
import Accordion from '../components/Accordion';

// import Title from '../components/Title';

const FAQ = () => {
	return (
		<div>
			<Hero>
				<Banner title='Lorem ipsum' subtitle='lorem ipsum' />
			</Hero>
			<Accordion title='What is Trading Rift?'>
				<span className='accordion-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et metus eu ante ullamcorper
					vestibulum sed id est.
				</span>
			</Accordion>
			<Accordion title='What is Trading Rift?'>
				<span className='accordion-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et metus eu ante ullamcorper
					vestibulum sed id est.
				</span>
			</Accordion>
			<Accordion title='What is Trading Rift?'>
				<span className='accordion-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et metus eu ante ullamcorper
					vestibulum sed id est.
				</span>
			</Accordion>
		</div>
	);
};

export default FAQ;
