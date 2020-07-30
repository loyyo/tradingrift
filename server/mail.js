const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config({ path: __dirname + '/variables.env' });

const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;

const auth = {
	auth: {
		api_key,
		domain,
	},
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
	const mailOptions = {
		from: email,
		to: 'maciejwiencis262@gmail.com',
		subject,
		text,
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			cb(err, null);
		} else {
			cb(null, data);
		}
	});
};

module.exports = sendMail;
