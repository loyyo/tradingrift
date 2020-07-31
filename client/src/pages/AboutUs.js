import React from 'react';
import Hero from '../components/Herov2';
import Banner from '../components/Banner';
import ContentIntroduction from '../components/ContentIntroduction';
import AboutUsContent from '../components/AboutUsContent';
import AboutUsAddition from '../components/AboutUsAddition';

/* cSpell:disable */
const AboutUs = () => {
	return (
		<div>
			<Hero>
				<Banner title='Lorem ipsum' subtitle='lorem ipsum' />
			</Hero>
			
			<ContentIntroduction 
				first='NASZA MISJA' 
				second='Jesteśmy jedyną legalną Polską firmą kupującą dostęp do kont z używanymi grami komputerowymi. Posiadamy długie 10-letnie doświadczenie. Naszym podstawowym celem jest pomoc graczom w sprzedaży używanej gry, której już nie potrzebują.'	
			/>

			<AboutUsContent />
			<AboutUsAddition />
			
		</div>
	);
};

export default AboutUs;
