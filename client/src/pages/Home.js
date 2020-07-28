import React from 'react';
import { Link } from 'react-router-dom';

import Herov2 from '../components/Herov2';
import Banner from '../components/Banner';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import SellCTA from '../components/SellCTA';

const Home = () => {
	return (
		<>
			<Herov2>
				<Banner title='Lorem ipsum' subtitle='lorem ipsum'>
					<Link to='/faq' className='btn-primary'>
						Dowiedz się więcej
					</Link>
					<Link to='/sprzedaj' className='btn-primary'>
						Sprzedaj teraz
					</Link>
				</Banner>
			</Herov2>
			<Process />
			<Testimonials />
			{/* <Counter /> */}
			<SellCTA />
		</>
	);
};

export default Home;
