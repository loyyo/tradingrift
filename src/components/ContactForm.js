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
	const [recaptcha, setRecaptcha] = useState(false);

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
		if (recaptcha && email) {
			const text = `
			Telefon: ${phone}
			Media: ${media}
			Treść: ${content}`;
			const data = {
				subject: topic,
				email,
				text,
			};
			axios
				.post('https://tradingrift.herokuapp.com/submitform', data)
				.then((response) => {
					console.log(response.data);
					alert(
						'Wiadomość została przesłana! Postaramy się jak najszybciej na nią odpowiedzieć :-)'
					);
					setTimeout(() => {
						window.location.reload(true);
					}, 5000);
				})
				.catch((error) => {
					console.log(error);
					alert('Coś poszło nie tak :-(');
				});
		} else if (recaptcha && !email) {
			alert('Musisz jeszcze podać emaila żebyśmy mogli się z Tobą skontaktować! :-)');
		} else if (!recaptcha && email) {
			alert('Zaznacz reCaptcha. Musimy się upewnić, że nie jesteś robotem! :-)');
		} else if (!recaptcha && !email) {
			alert('Proszę uzupełnić email oraz reCaptcha!');
		} else {
			alert('Coś poszło nie tak :-(');
		}
	};

	const reCaptcha = () => {
		setRecaptcha(!recaptcha);
	};

	return (
		<div>
			<ContentIntroduction
				first='Skontaktuj się z Nami! Odpowiadamy na wszystkie Pytania.'
				second='Nasz support mailowy jest czynny przez 6 dni w tygodniu.'
			/>

			{/* Deleted onSubmit={handleSubmitForm}*/}
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
								pattern='.{0,50}'
								title='Można użyć maksymalnie 50 znaków.'
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
								pattern='[0-9]{9}'
								title='Telefon powinien zawierać 9 znaków 0-9.'
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
						<ReCAPTCHA
							sitekey='6Ld6RbwZAAAAAHZmsFVvcsBdR4wlA_uwDgMd8ti2
'
							onChange={reCaptcha}
						/>
					</div>
					<input id='content-form-submit' type='submit' value='Wyślij' />
				</div>
				<div className='contact-data'>
					<h3>Dane kontaktowe</h3>
					<p>
						<FaPhoneAlt className='contact-icons' /> <span>579 050 442</span>
					</p>
					<p>
						<BsEnvelopeFill className='contact-icons' /> <span>maciejwiencis262@gmail.com</span>
					</p>
					<p>
						<FaSkype className='contact-icons' /> <span>TradingRift</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
