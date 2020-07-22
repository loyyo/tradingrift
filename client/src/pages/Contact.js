import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Herov2';
import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
	return (
		<>
			<Hero>
				<Banner title='Kontakt' subtitle='Skontaktuj się z Nami! Odpowiadamy na wszystkie Pytania.'>
					<Link to='/faq' className='btn-primary'>
						Sprawdź nasze FAQ
					</Link>
				</Banner>
			</Hero>
			<ContactForm />
			<ContactInfo />
		</>
	);
};

export default Contact;
