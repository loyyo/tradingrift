import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';
/* cSpell:disable */
export default class Process extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'Free Cocktails',
				info:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi alias provident minus repellendus labore, expedita exercitationem fugit. Qui, maxime? Itaque illum at error facere enim inventore minima placeat explicabo voluptas!',
			},
			{
				icon: <FaHiking />,
				title: 'Endless Hiking',
				info:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi alias provident minus repellendus labore, expedita exercitationem fugit. Qui, maxime? Itaque illum at error facere enim inventore minima placeat explicabo voluptas!',
			},
			{
				icon: <FaShuttleVan />,
				title: 'Free Shuttle',
				info:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi alias provident minus repellendus labore, expedita exercitationem fugit. Qui, maxime? Itaque illum at error facere enim inventore minima placeat explicabo voluptas!',
			},
			{
				icon: <FaBeer />,
				title: 'Strongest Beer',
				info:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi alias provident minus repellendus labore, expedita exercitationem fugit. Qui, maxime? Itaque illum at error facere enim inventore minima placeat explicabo voluptas!',
			},
		],
	};
	render() {
		return (
			<section className='services'>
				<Title title='services' />
				<div className='services-center'>
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className='service'>
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
