import React from 'react';

const SellForm = () => {
	return( 
	<div className='sell-account-form'>
		<form method='post'>
			<div className='sell-account-left-side'>
				<div className='sell-title'><p>Ilość Championów</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>

				<div className='sell-title'><p>Ilość Skinów</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>
				
				<div className='sell-title'><p>Ilość Blue Essence</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>
				
				<div className='sell-title'><p>Level konta</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>
				
				<div className='sell-title'><p>Punkty Riot Points</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>
				
				<div className='sell-title'><p>Honor</p></div>
				<div className='sell-input'>
					<select>
						<option>Please select</option>
						<option>0 zablokowane</option>
						<option>0 niehonorowe</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>

				<div className='sell-title'><p>Ilość ikon summonera</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>
				
				<div className='sell-title'><p>Dywizja Sezon 9</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>
				
				<div className='sell-title'><p>Dywizja Sezon 10</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>
				
				<div className='sell-title'><p>Op.gg Link: (http://www.op.gg/)</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>

				<div className='sell-title'><p>Uwagi dodatkowe</p></div>
				<div className='sell-input'><textarea type='text'></textarea></div>

				<div className='sell-title'><p>Screen z najlepszymi Skinami</p></div>
				<div className='sell-input'><input type='file' name='championNumber' /></div>

				<div className='sell-title'><p>Screen 2 (dodatkowy)</p></div>
				<div className='sell-input'><input type='file' name='championNumber' /></div>

				<div className='sell-title'><p>Sugerowana cena</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>
			</div>
			<div className='sell-account-right-side'>

			<div className='sell-title'><p>Czy jesteś pierwszym właścicielem konta?</p></div>
				<div className='sell-input'>
					<select>
						<option>Wybierz</option>
						<option>Tak</option>
						<option>Nie</option>
					</select>
				</div>

				<div className='sell-title'><p>Czy konto było kiedyś banowane?</p></div>
				<div className='sell-input'>
					<select>
						<option>Wybierz</option>
						<option>Tak</option>
						<option>Nie</option>
					</select>
				</div>

				<div className='sell-title'><p>Czy konto było kiedyś zawieszane/karane?</p></div>
				<div className='sell-input'>
					<select>
						<option>Wybierz</option>
						<option>Tak</option>
						<option>Nie</option>
					</select>
				</div>

				<div className='sell-title'><p>Czy kiedykolwiek straciłeś dostęp do konta?</p></div>
				<div className='sell-input'>
					<select>
						<option>Wybierz</option>
						<option>Tak</option>
						<option>Nie</option>
					</select>
				</div>

				<div className='sell-title'><p>Serwer, na którym znajduje się konto</p></div>
				<div className='sell-input'>
					<select>
						<option>Wybierz</option>
						<option>Nordic @ East</option>
						<option>West</option>
						<option>Turcja</option>
						<option>Rosja</option>
						<option>Inne</option>
					</select>
				</div>

				<div className='sell-title'><p>Czy możesz wystawić konto na Allegro?</p></div>
				<div className='sell-input'>
					<select>
						<option>Wybierz</option>
						<option>Tak</option>
						<option>Nie</option>
					</select>
				</div>

				<h2 style={{marginTop: '50px'}}>Kontakt</h2>
				<div className='sell-title'><p>Adres E-mail (nie używaj yahoo)</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>

				<div className='sell-title'><p>Telefon Kontaktowy</p></div>
				<div className='sell-input'><input type='text' name='championNumber' /></div>

				<div className='sell-title'><p>Jak do nas trafiłeś?</p></div>
				<div className='sell-input'>
					<select>
						<option>Wybierz</option>
						<option>Facebook</option>
						<option>Trade chat</option>
						<option>Znajomi</option>
						<option>Google</option>
						<option>Inne</option>
					</select>
				</div>
			</div>
			<div className='sell-account-submit'>
				<input type='submit' value='Wyślij ofertę' />
			</div>
		</form>
	</div>)
};

export default SellForm;
