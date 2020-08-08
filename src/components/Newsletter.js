import React, { useState } from 'react';
import { IoIosMail } from 'react-icons/io';

const Newsletter = () => {
	const [email, setEmail] = useState('');
	const handleChange = (e) => {
		setEmail(e.target.value.trim());
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (email) {
			fetch(`https://tradingrift.herokuapp.com/api/memberAdd?email=${email}`)
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					alert('Wszystko przebiegło pomyślnie!');
				})
				.catch((err) => {
					console.log(err);
					alert('Coś poszło nie tak :-(');
				});
		}
	};
	return (
		<div className='newsletter'>
			<div className='newsletter-input'>
				<div className='newsletter-header'>
					<p>NEWSLETTER:</p>
				</div>
				<form action='/' onSubmit={handleSubmit}>
					<div className='newsletter-form'>
						<input
							type='email'
							name='email'
							className='newsletter-input-email'
							onChange={handleChange}
							value={email}
						/>
					</div>
					<div className='newsletter-send'>
						<button type='submit'>
							<IoIosMail />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Newsletter;
