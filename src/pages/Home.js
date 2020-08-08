import React from 'react';
import { Link } from 'react-router-dom';

import Herov2 from '../components/Herov2';
import Banner from '../components/Banner';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import SellCTA from '../components/SellCTA';
import ContentIntroduction from '../components/ContentIntroduction';

const Home = () => {
	return (
		<>
			<Herov2>
				<Banner title='Znudziła Cię Gierka?' subtitle='TU SPRZEDASZ KONTO!'>
					<Link to='/faq' className='btn-primary'>
						Dowiedz się więcej
					</Link>
					<Link to='/sprzedaj' className='btn-primary'>
						Sprzedaj teraz
					</Link>
				</Banner>
			</Herov2>
			<ContentIntroduction
				first='Jak sprzedać konto do gry?'
				second='To proste! Zrobisz to w czterech krokach. Szybko, łatwo, a przede wszystkim uczciwie!'
			/>
			<Process />
			<Testimonials />
			{/* <Counter /> */}
			<SellCTA />
		</>
	);
};

export default Home;
