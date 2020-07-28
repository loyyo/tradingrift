import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaPhoneAlt, FaSkype } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';

// import '../styles/ContactForm.css';

const ContactForm = () => {
	const reCaptcha = (value) => {
		console.log('Captcha value:', value);
	};
	return (
		<div>
			<form method='post' className='contact-all'>
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
							<input type='text' name='contact-form-topic' />
						</div>
					</div>
					<div className='contact-form-topic-group'>
						<div className='contact-form-title'>
							<p>
								Adres email <span style={{ color: 'red', fontWeight: 700 }}>*</span>
							</p>
						</div>
						<div className='contact-form-input'>
							<input type='text' name='contact-form-email' />
						</div>
					</div>
					<div className='contact-form-topic-group'>
						<div className='contact-form-title'>
							<p>Telefon kontaktowy</p>
						</div>
						<div className='contact-form-input'>
							<input type='text' name='contact-form-phone' />
						</div>
					</div>
					<div className='contact-form-topic-group'>
						<div className='contact-form-title'>
							<p>Treść wiadomości</p>
						</div>
						<div className='contact-form-textarea'>
							<textarea type='text' name='contact-form-content'></textarea>
						</div>
					</div>
					<div className='contact-form-topic-group'>
						<div className='contact-form-title'>
							<p>Jak do nas trafiłeś?</p>
						</div>
						<div className='contact-form-input'>
							<select name='contact-form-select'>
								<option value='' disabled selected>
									Wybierz
								</option>
								<option value='fb'>Facebook</option>
								<option value='spam'>Spam</option>
								<option value='google'>Google</option>
								<option value='friends'>Znajomi</option>
								<option value='other'>Inni</option>
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
