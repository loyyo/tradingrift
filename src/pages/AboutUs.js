import React from 'react';
import Hero from '../components/Herov2';
import Banner from '../components/Banner';
import ContentIntroduction from '../components/ContentIntroduction';
import AboutUsContent from '../components/AboutUsContent';

/* cSpell:disable */
const AboutUs = () => {
	return (
		<div>
			<Hero>
				<Banner title='Kim Jesteśmy?' subtitle='Poznaj nas! :-)' />
			</Hero>
			<ContentIntroduction
				first='NASZA MISJA'
				second='Jesteśmy jedyną legalną Polską firmą kupującą dostęp do kont z używanymi grami komputerowymi. Posiadamy długie 10-letnie doświadczenie. Naszym podstawowym celem jest pomoc graczom w sprzedaży używanej gry, której już nie potrzebują.'
			/>
			<AboutUsContent />
			<ContentIntroduction
				className='about-us-addition'
				first='A co najważniejsze?'
				second='U nas po ustaleniu ceny, najpierw otrzymasz pieniądze, 
				a dopiero potem przekażesz nam dostęp do konta.'
			/>
		</div>
	);
};

export default AboutUs;
