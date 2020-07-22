import React, { useState } from 'react';
import { css } from 'emotion';

const Testimonials = () => {
	const reviews = {
		0: {
			client: 'Client nr1',
			quote:
				'Etiam rhoncus, enim sed volutpat tristique, sapien felis imperdiet arcu, non sagittis lectus magna vel ligula',
		},
		1: {
			client: 'Client nr2',
			quote:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum magna, quis viverra massa semper eget.',
		},
		2: {
			client: 'Client nr3',
			quote:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus, enim sed volutpat tristique, sapien felis imperdiet arcu, non sagittis lectus magna vel ligula',
		},
		3: {
			client: 'Client nr4',
			quote:
				'Donec bibendum fermentum magna, quis viverra massa semper eget. Etiam rhoncus, enim sed volutpat tristique, sapien felis imperdiet arcu, non sagittis lectus magna vel ligula',
		},
	};
	const [current, setCurrent] = useState(reviews[0]);
	const [active, setActive] = useState(0);

	const handleSetClick = (event) => {
		setCurrent(reviews[event.target.getAttribute('data-quote')]);
		setActive(event.target.getAttribute('data-quote'));
	};

	return (
		<div className='services'>
			<div
				className={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					margin: 40px auto;
					max-width: 700px;

					p {
						text-align: center;
						margin-bottom: 20px;
					}
				`}
			>
				<p>{current.quote}</p>
				<p>{current.client}</p>
				<div
					className={css`
						display: flex;
						span {
							height: 20px;
							width: 20px;
							margin: 0 3px;
							display: flex;
							align-items: center;
							justify-content: center;
							cursor: pointer;
						}

						span::before {
							content: '';
							height: 6px;
							width: 6px;
							background-color: #af9a7d;
							border-radius: 50%;
							transition: background-color 0.3 ease;
						}
						span:hover::before {
							background-color: #454545;
						}
						span[data-quote="${active}"]::before {
							background-color: #454545;
						}
					`}
				>
					{Object.keys(reviews).map((index) => (
						<span onClick={(event) => handleSetClick(event)} data-quote={index} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
