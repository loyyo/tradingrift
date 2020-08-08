const express = require('express');
const path = require('path');
const sendMail = require('./mail');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config({ path: __dirname + '/variables.env' });

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

// Data Parsing
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(express.json());

// Sending Email
app.post('/submitform', (req, res) => {
	const { subject, email, text } = req.body;
	console.log('Data: ', req.body);
	sendMail(email, subject, text, (err, data) => {
		if (err) {
			res.status(500).json({ message: 'Internal Error' });
		} else {
			res.json({ message: 'Email sent!!!' });
		}
	});
});

// Mailchimp API Endpoint
app.get('/api/memberAdd', (req, res) => {
	mailchimp
		.post(`/lists/${list_id}/members/`, {
			email_address: req.query.email,
			status: 'subscribed',
		})
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			res.send(err);
		});
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});

const port = process.env.PORT || 9001;
app.listen(port);

console.log(`Express listening on port ${port}`);
