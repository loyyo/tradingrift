import React, { Component } from 'react';
import { FaWpforms, FaEnvelope, FaHandshake } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
/* cSpell:disable */
export default class Process extends Component {
	state = {
		services: [
			{
				icon: <FaWpforms />,
				title: 'ZŁOŻENIE OFERTY',
				info:
					'Aby sprzedać konto należy złożyć ofertę poprzez wypełnienie formularza znajdującego się w zakładce SPRZEDAJ. W formularzu staraj się podać jak najwięcej szczegółów dotyczących konta.',
			},
			{
				icon: <FaEnvelope />,
				title: 'INFORMACJA ZWROTNA',
				info:
					'W odpowiedzi otrzymasz maila z naszą wyceną. Średni czas oczekiwania wynosi ok. 1-2 dni. Pamiętaj! W formularzu wpisz poprawnie swój adres mailowy, abyśmy mogli odpowiedzieć na ofertę.',
			},
			{
				icon: <FaHandshake />,
				title: 'AKCEPTACJA CENY',
				info:
					'Jeśli propozycja ceny Cię satysfakcjonuje, naciśnij przycisk "Akceptuję", który przeniesie Cię do instrukcji sprzedaży. Najpierw otrzymasz pieniądze, potem przekażesz nam dostęp do konta. Nasze oferty są ważne 2 dni. Po tym czasie musisz zapytać czy oferta jest nadal aktualna.',
			},
			{
				icon: <GiReceiveMoney />,
				title: 'FORMY PŁATNOŚCI',
				info:
					'Wykonujemy przelewy do dowolnego banku krajowego, Payu oraz Paypal. Zależy nam, aby osoby przekazujące nam konto czuły się bezpiecznie, dlatego kontakt z nami jest dostępny przez cały czas zawierania transakcji.',
			},
		],
	};
	render() {
		return (
			<section className='services'>
				<div className='services-center'>
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className='service'>
								<span>{item.icon}</span>
								<div></div>
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
