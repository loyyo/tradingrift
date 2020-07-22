import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import Newsletter from '../components/Newsletter';

const Footer = () => {
	return (
		<footer>
			<div className='footer'>
				<div className='socials-logo'>
					<img src='TradingRift.png' alt='' />
					<h3>TradingRift</h3>
				</div>
				<div className='socials-footer'>
					<div className='fb'>
						<FaFacebookF />
					</div>
					<div className='tw'>
						<FaTwitter />
					</div>
					<div className='ig'>
						<AiFillInstagram />
					</div>
				</div>
				<Newsletter />
				<div className='copyright'>Jedna baba drugiej babie &copy; wsadziła do dupy grabie.</div>
			</div>
		</footer>
	);
};

export default Footer;
