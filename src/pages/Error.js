import React from 'react';
import Hero from '../components/Herov2';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<Hero>
			<Banner title='404' subtitle='Strony nie znaleziono'>
				<Link to='/' className='btn-primary'>
					Wróć do strony głównej
				</Link>
			</Banner>
		</Hero>
	);
}
