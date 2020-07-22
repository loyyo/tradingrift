import React, { useState } from 'react';
import { IoIosMail } from 'react-icons/io';

const Newsletter = () => {
	const [email, setEmail] = useState('');
	const handleChange = (e) => {
		setEmail(e.target.value.trim());
	};
	const submitEmail = (e) => {
		e.preventDefault();
		const data = {
			members: [
				{
					email_address: email,
					status: 'subscribed',
				},
			],
		};
		const postData = JSON.stringify(data);
		const options = {
			method: 'POST',
			headers: {
				Authorization: 'auth e848ec700d15040b37439b457e52619c-us17',
			},
			body: postData,
		};
		if (email) {
			fetch(
				'https://us17.api.mailchimp.com/3.0/lists/1e315f371f/members',
				options
			).then((response) => response.json());
		}
	};
	return (
		<div className='newsletter'>
			<div className='newsletter-input'>
				<div className='newsletter-header'>
					<p>NEWSLETTER:</p>
				</div>
				<form onSubmit={submitEmail}>
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
