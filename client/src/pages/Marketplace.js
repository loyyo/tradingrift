import React from 'react';
import Hero from '../components/Herov2';
import Banner from '../components/Banner';
import SellForm from '../components/SellForm';
import ContentInfroduction from '../components/ContentIntroduction';

const Marketplace = () => {
	return (
		<div>
			<Hero>
				<Banner title='Lorem ipsum' subtitle='lorem ipsum' />
			</Hero>
			<ContentInfroduction />
			<SellForm />
		</div>
	);
};

export default Marketplace;
