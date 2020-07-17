import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import SellForm from '../components/SellForm';

const Marketplace = () => {
	return (
		<div>
			<Hero>
				<Banner title='Lorem ipsum' subtitle='lorem ipsum' />
			</Hero>
			<SellForm />
		</div>
	);
};

export default Marketplace;
