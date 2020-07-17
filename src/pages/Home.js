import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Process from '../components/Process';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import SellCTA from '../components/SellCTA';
import ComingSoon from '../components/ComingSoon';

const Home = () => {
	return (
		<>
			<Hero>
				<Banner title='Lorem ipsum' subtitle='lorem ipsum'>
					<Link to='/faq' className='btn-primary'>
						Dowiedz się więcej
					</Link>
					<Link to='/sprzedaj' className='btn-primary'>
						Sprzedaj teraz
					</Link>
				</Banner>
			</Hero>
			<Process />
			<Testimonials />
			{/* <Counter /> */}
			<ComingSoon />
			<Newsletter />
			<SellCTA />
		</>
	);
};

export default Home;
