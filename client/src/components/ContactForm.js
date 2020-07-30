import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaPhoneAlt, FaSkype } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import ContentIntroduction from './ContentIntroduction';
import axios from 'axios';
// import '../styles/ContactForm.css';

const ContactForm = () => {
	const [topic, setTopic] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [content, setContent] = useState('');
	const [media, setMedia] = useState('');

	const handleChangeTopic = (e) => {
		setTopic(e.target.value);
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value.trim());
	};

	const handleChangePhone = (e) => {
		setPhone(e.target.value.trim());
	};

	const handleChangeContent = (e) => {
		setContent(e.target.value);
	};

	const handleChangeMedia = (e) => {
		setMedia(e.target.value);
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		if (email) {
			const text = `Telefon: ${phone} Media: ${media} Treść: ${content}`;
			const data = {
				subject: topic,
				email,
				text,
			};
			axios
				.post('/submitform', data)
				.then((response) => console.log(response.data))
				.catch((error) => console.log(error));
		}
	};

	const reCaptcha = (value) => {
		console.log('Captcha value:', value);
	};

	return (
		<div>
			<ContentIntroduction
				first='Skontaktuj się z Nami! Odpowiadamy na wszystkie Pytania.'
				second='Nasz support mailowy jest czynny przez 6 dni w tygodniu.'
			/>
			<form action='/' onSubmit={handleSubmitForm} className='contact-all'>
				<div className='contact-form'>
					<div style={{ marginBottom: '30px', marginLeft: '10px' }}>
						<p>
							<span style={{ color: 'red', fontWeight: 700 }}>*</span>Pole wymagane.
						</p>
					</div>
					<div className='contact-form-topic-group'>
						<div className='contact-form-title'>
							<p>Temat wiadomości</p>
						</div>
						<div className='contact-form-input'>
							<input
								type='text'
								name='topic'
								id='contact-form-topic'
								onChange={handleChangeTopic}
								value={topic}
							/>
						</div>
					</div>
					<div className='contact-form-topic-group'>
						<div className='contact-form-title'>
							<p>
								Adres email <span style={{ color: 'red', fontWeight: 700 }}>*</span>
							</p>
						</div>
						<div className='contact-form-input'>
							<input
								type='email'
								name='email'
								id='contact-form-email'
								onChange={handleChangeEmail}
								value={email}
							/>
						</div>
					</div>
					<div className='contact-form-topic-group'>
						<div className='contact-form-title'>
							<p>Telefon kontaktowy</p>
						</div>
						<div className='contact-form-input'>
							<input
								type='tel'
								name='tel'
								id='contact-form-phone'
								onChange={handleChangePhone}
								value={phone}
							/>
						</div>
					</div>
					<div className='contact-form-topic-group'>
						<div className='contact-form-title'>
							<p>Treść wiadomości</p>
						</div>
						<div className='contact-form-textarea'>
							<textarea
								name='content'
								id='contact-form-content'
								onChange={handleChangeContent}
								value={content}
							/>
						</div>
					</div>
					<div className='contact-form-topic-group'>
						<div className='contact-form-title'>
							<p>Jak do nas trafiłeś?</p>
						</div>
						<div className='contact-form-input'>
							<select
								name='media'
								id='contact-form-media'
								onChange={handleChangeMedia}
								value={media}
							>
								<option hidden disabled value=''>
									Wybierz
								</option>
								<option>Facebook</option>
								<option>Spam</option>
								<option>Google</option>
								<option>Znajomi</option>
								<option>Inny</option>
							</select>
						</div>
					</div>
					<div className='recaptcha'>
						<ReCAPTCHA sitekey='6LcOzrQZAAAAACliB4sqyEXLzhrcQCycOYpGaJpe' onChange={reCaptcha} />
					</div>
					<input id='content-form-submit' type='submit' value='Wyślij' />
				</div>
				<div className='contact-data'>
					<h3>Dane kontaktowe</h3>
					<p>
						<FaPhoneAlt className='contact-icons' /> <span>666 696 969</span>
					</p>
					<p>
						<BsEnvelopeFill className='contact-icons' /> <span>jebac@pis.com</span>
					</p>
					<p>
						<FaSkype className='contact-icons' /> <span>SprzedajKonto</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
