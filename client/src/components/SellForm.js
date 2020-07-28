import React from 'react';
import SellFormInput from './SellFormInput';
import SellFormSelect from './SellFormSelect'
import SellFormTextarea from './SellFormTextarea'
import SellFormOption from './SellFormOption'

const SellForm = () => {
	return( <div className='sell-account-form'>
		<div className='sell-account-left-side'>
			<SellFormInput sectionTitle='Ilość Championów' inputType='text' inputName='champions' />
			<SellFormInput sectionTitle='Ilość Skinów' inputType='text' inputName='champions' />
			<SellFormInput sectionTitle='Ilość Blue Essence' inputType='text' inputName='champions' />
			<SellFormInput sectionTitle='Level Konta' inputType='text' inputName='champions' />
			<SellFormInput sectionTitle='Punkty Riot Points' inputType='text' inputName='champions' />
			
			{/*ToDo
				Sell Form Select
				Options don't work
			*/}
			<SellFormSelect sectionTitle='Honor' options={[2, 1]} />
			<SellFormInput sectionTitle='Ilość ikon summonera' inputType='text' inputName='champions' />
			<SellFormInput sectionTitle='Dywizja Sezon 9' inputType='text' inputName='champions' />
			<SellFormInput sectionTitle='Dywizja Sezon 10' inputType='text' inputName='champions' />
			<SellFormInput sectionTitle='Op.gg Link: (http://www.op.gg/)' inputType='text' inputName='champions' />

			<SellFormTextarea sectionTitle='Uwagi dodatkowe' inputType='text' inputName='champions' />

			<SellFormInput sectionTitle='Screen z najlepszymi Skinami' inputType='file' inputName='champions' />
			<SellFormInput sectionTitle='Screen 2 (dodatkowy)' inputType='file' inputName='champions' />
			<SellFormInput sectionTitle='Sugerowana cena' inputType='text' inputName='champions' />
		</div>
		<div className='sell-account-right-side'>
			<SellFormSelect sectionTitle='Czy jesteś pierwszym właścicielem konta?' />
			<SellFormSelect sectionTitle='Czy konto było kiedyś banowane?' />
			<SellFormSelect sectionTitle='Czy konto było kiedyś zawieszane/karane?' />
			<SellFormSelect sectionTitle='Czy kiedykolwiek straciłeś dostęp do konta?' />
			<SellFormSelect sectionTitle='Serwer, na którym znajduje się konto' />
			<SellFormSelect sectionTitle='Czy możesz wystawić konto na Allegro?' />

			<h2 style={{marginTop: '50px'}}>Kontakt</h2>
			<SellFormInput sectionTitle='Adres E-mail (nie używaj yahoo)' inputType='text' inputName='champions' />
			<SellFormInput sectionTitle='Telefon kontaktowy' inputType='text' inputName='champions' />
			<SellFormSelect sectionTitle='Jak do nas trafiłeś?' />
		</div>
	</div>)
};

export default SellForm;
