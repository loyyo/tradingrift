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
			<ContentInfroduction
				first='Wypełnij i wyślij poniższy Formularz.'
				second='Staraj się podać jak najwięcej szczegółów dotyczących konta.'
				third='Pamiętaj! W formularzu wpisz poprawnie swój adres mailowy, abyśmy mogli odpowiedzieć na ofertę.'
			/>
			<SellForm />
		</div>
	);
};

export default Marketplace;
