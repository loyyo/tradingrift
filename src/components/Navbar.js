import React, { useState } from 'react';
import logo from '../images/TradingRift.png';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const toggler = () => {
		setOpen(!open);
	};
	return (
		<header>
			<nav className='navbar'>
				<div className='nav-center'>
					<div className='nav-header'>
						<div className='navbar-brand'>
							<Link to='/'>
								<img src={logo} height='50' alt='TradingRift' />
							</Link>
						</div>
						<button type='button' className='nav-btn' onClick={toggler}>
							<FaAlignRight className='nav-icon' />
						</button>
					</div>
					<ul className={open ? 'nav-links show-nav' : 'nav-links'}>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/o-nas'>O Nas</Link>
						</li>
						<li>
							<Link to='/sprzedaj'>Sprzedaj</Link>
						</li>
						<li>
							<Link to='/regulamin'>Regulamin</Link>
						</li>
						<li>
							<Link to='/kontakt'>Kontakt</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
