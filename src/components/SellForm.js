import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const SellForm = () => {
	const [champs, setChamps] = useState('');
	const [skins, setSkins] = useState('');
	const [be, setBe] = useState('');
	const [level, setLevel] = useState('');
	const [rp, setRp] = useState('');
	const [honor, setHonor] = useState('');
	const [icons, setIcons] = useState('');
	const [s9, setS9] = useState('');
	const [s10, setS10] = useState('');
	const [opgg, setOpgg] = useState('');
	const [comments, setComments] = useState('');
	const [link, setLink] = useState('');
	const [link2, setLink2] = useState('');
	const [price, setPrice] = useState('');
	const [owner, setOwner] = useState('');
	const [ban, setBan] = useState('');
	const [restriction, setRestriction] = useState('');
	const [access, setAccess] = useState('');
	const [server, setServer] = useState('');
	const [allegro, setAllegro] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [media, setMedia] = useState('');
	const [recaptcha, setRecaptcha] = useState(false);

	const handleChangeChamps = (e) => {
		setChamps(e.target.value.trim());
	};
	const handleChangeSkins = (e) => {
		setSkins(e.target.value.trim());
	};
	const handleChangeBe = (e) => {
		setBe(e.target.value.trim());
	};
	const handleChangeLevel = (e) => {
		setLevel(e.target.value.trim());
	};
	const handleChangeRp = (e) => {
		setRp(e.target.value.trim());
	};
	const handleChangeHonor = (e) => {
		setHonor(e.target.value);
	};
	const handleChangeIcons = (e) => {
		setIcons(e.target.value.trim());
	};
	const handleChangeS9 = (e) => {
		setS9(e.target.value);
	};
	const handleChangeS10 = (e) => {
		setS10(e.target.value);
	};
	const handleChangeOpgg = (e) => {
		setOpgg(e.target.value.trim());
	};
	const handleChangeComments = (e) => {
		setComments(e.target.value);
	};
	const handleChangeScreen = async (e) => {
		const screen = e.target.files[0];
		const auth = process.env.IMGUR_CLIENT_ID;
		const formData = new FormData();
		formData.append('type', 'file');
		formData.append('image', screen);
		const response = await fetch('https://api.imgur.com/3/upload.json', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Client-ID ${auth}`,
			},
			body: formData,
		});
		const data = await response.json();
		if (data.success) {
			setLink2(data.data.link);
			console.log(`IMGUR API Działa ${link2}`);
		} else {
			console.log('Coś poszło nie tak');
		}
	};
	const handleChangeScreen2 = async (e) => {
		const screen = e.target.files[0];
		const auth = process.env.IMGUR_CLIENT_ID;
		const formData = new FormData();
		formData.append('type', 'file');
		formData.append('image', screen);
		const response = await fetch('https://api.imgur.com/3/upload.json', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Client-ID ${auth}`,
			},
			body: formData,
		});
		const data = await response.json();
		if (data.success) {
			setLink(data.data.link);
			console.log(`IMGUR API Działa ${link}`);
		} else {
			console.log('Coś poszło nie tak');
		}
	};
	const handleChangePrice = (e) => {
		setPrice(e.target.value.trim());
	};
	const handleChangeOwner = (e) => {
		setOwner(e.target.value);
	};
	const handleChangeBan = (e) => {
		setBan(e.target.value);
	};
	const handleChangeRestriction = (e) => {
		setRestriction(e.target.value);
	};
	const handleChangeAccess = (e) => {
		setAccess(e.target.value);
	};
	const handleChangeServer = (e) => {
		setServer(e.target.value);
	};
	const handleChangeAllegro = (e) => {
		setAllegro(e.target.value);
	};
	const handleChangeEmail = (e) => {
		setEmail(e.target.value.trim());
	};
	const handleChangePhone = (e) => {
		setPhone(e.target.value.trim());
	};
	const handleChangeMedia = (e) => {
		setMedia(e.target.value);
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();

		if (recaptcha && email) {
			const text = `
			Championy: ${champs}
			Skiny: ${skins}
			BE: ${be}
			RP: ${rp}
			Level: ${level}
			Honor: ${honor}
			Ilość ikon: ${icons}
			Sezon 9: ${s9}
			Sezon 10: ${s10}
			Server: ${server}
			Op.gg: ${opgg}

			Uwagi dodatkowe: ${comments}

			Najlepsze Skiny: ${link}
			Screen Dodatkowy: ${link2}

			Sugerowana cena: ${price}

			Właściciel: ${owner}
			Stracony dostęp: ${access}
			Zawieszenie: ${restriction}
			Ban: ${ban}
			Allegro: ${allegro}

			Telefon: ${phone}
			Media: ${media}`;

			const data = {
				subject: opgg,
				email,
				text,
			};

			axios
				.post('https://tradingrift.herokuapp.com/submitform', data)
				.then((response) => {
					console.log(response.data);
					alert('Wszystko przebiegło pomyślnie! Postaramy się jak najszybciej odpowiedzieć :-)');
					setTimeout(() => {
						window.location.reload(true);
					}, 5000);
				})
				.catch((error) => {
					console.log(error);
					alert('Coś poszło nie tak :-(');
				});
		} else if (recaptcha && !email) {
			alert('Musisz jeszcze podać emaila żebyśmy mogli się z Tobą skontaktować! :-)');
		} else if (!recaptcha && email) {
			alert('Zaznacz reCaptcha. Musimy się upewnić, że nie jesteś robotem! :-)');
		} else if (!recaptcha && !email) {
			alert('Proszę uzupełnić email oraz reCaptcha!');
		} else {
			alert('Coś poszło nie tak :-(');
		}
	};

	const reCaptcha = () => {
		setRecaptcha(!recaptcha);
	};

	return (
		<div className='sell-account-form'>
			<form id='sellformsubmit' action='/' onSubmit={handleSubmitForm}>
				<div className='sell-account-left-side'>
					<div className='sell-title'>
						<p>Ilość Championów</p>
					</div>
					<div className='sell-input'>
						<input
							type='text'
							pattern='[0-9]{0,3}'
							title='Można użyć maksymalnie 3 znaków 0-9.'
							name='champs'
							onChange={handleChangeChamps}
							value={champs}
						/>
					</div>

					<div className='sell-title'>
						<p>Ilość Skinów</p>
					</div>
					<div className='sell-input'>
						<input
							type='text'
							pattern='[0-9]{0,4}'
							title='Można użyć maksymalnie 4 znaków 0-9.'
							name='skins'
							onChange={handleChangeSkins}
							value={skins}
						/>
					</div>

					<div className='sell-title'>
						<p>Ilość Blue Essence</p>
					</div>
					<div className='sell-input'>
						<input
							type='text'
							pattern='[0-9]{0,10}'
							title='Można użyć maksymalnie 10 znaków 0-9.'
							name='be'
							onChange={handleChangeBe}
							value={be}
						/>
					</div>

					<div className='sell-title'>
						<p>Level konta</p>
					</div>
					<div className='sell-input'>
						<input
							type='text'
							name='level'
							pattern='[0-9]{0,4}'
							title='Można użyć maksymalnie 4 znaków 0-9.'
							onChange={handleChangeLevel}
							value={level}
						/>
					</div>

					<div className='sell-title'>
						<p>Punkty Riot Points</p>
					</div>
					<div className='sell-input'>
						<input
							type='text'
							name='rp'
							pattern='[0-9]{0,6}'
							title='Można użyć maksymalnie 6 znaków 0-9.'
							onChange={handleChangeRp}
							value={rp}
						/>
					</div>

					<div className='sell-title'>
						<p>Honor</p>
					</div>
					<div className='sell-input'>
						<select name='honor' onChange={handleChangeHonor} value={honor}>
							<option hidden disabled value=''>
								Wybierz
							</option>
							<option>0 zablokowane</option>
							<option>0 niehonorowe</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>

					<div className='sell-title'>
						<p>Ilość ikon summonera</p>
					</div>
					<div className='sell-input'>
						<input
							type='text'
							pattern='[0-9]{0,4}'
							title='Można użyć maksymalnie 4 znaków 0-9.'
							name='icons'
							onChange={handleChangeIcons}
							value={icons}
						/>
					</div>

					<div className='sell-title'>
						<p>Dywizja Sezon 9</p>
					</div>
					<div className='sell-input'>
						<input
							type='text'
							pattern='[A-Za-z 0-9]{0,20}'
							title='Można użyć maksymalnie 20 znaków A-Z, a-z, 0-9.'
							name='s9'
							onChange={handleChangeS9}
							value={s9}
						/>
					</div>

					<div className='sell-title'>
						<p>Dywizja Sezon 10</p>
					</div>
					<div className='sell-input'>
						<input
							type='text'
							pattern='[A-Za-z 0-9]{0,20}'
							title='Można użyć maksymalnie 20 znaków A-Z, a-z, 0-9.'
							name='s10'
							onChange={handleChangeS10}
							value={s10}
						/>
					</div>

					<div className='sell-title'>
						<p>
							Op.gg Link: (<a href='http://www.op.gg/'>https://www.op.gg/</a>)
						</p>
					</div>
					<div className='sell-input'>
						<input
							type='text'
							pattern='[A-Za-z0-9:/]{0,20}.op.gg/[A-Za-z0-9 + = - _ ^ / : * %]{0,70}'
							title='Można użyć nastpępujących znaków: A-Z,a-z,0-9,:,/,+,=,*,^,-, według szablonu https://www.op.gg/twoja_ścieżka'
							name='opgg'
							onChange={handleChangeOpgg}
							value={opgg}
						/>
					</div>

					<div className='sell-title'>
						<p>Uwagi dodatkowe</p>
					</div>
					<div className='sell-input'>
						<textarea
							type='text'
							name='comments'
							onChange={handleChangeComments}
							value={comments}
						/>
					</div>

					<div className='sell-title'>
						<p>Screen z najlepszymi Skinami</p>
					</div>
					<div className='sell-input'>
						<input type='file' name='screen' onChange={handleChangeScreen} />
					</div>

					<div className='sell-title'>
						<p>Screen 2 (dodatkowy)</p>
					</div>
					<div className='sell-input'>
						<input type='file' name='screen2' onChange={handleChangeScreen2} />
					</div>

					<div className='sell-title'>
						<p>Sugerowana cena</p>
					</div>
					<div className='sell-input'>
						<input type='text' name='price' onChange={handleChangePrice} value={price} />
					</div>
				</div>
				<div className='sell-account-right-side'>
					<div className='sell-title'>
						<p>Czy jesteś pierwszym właścicielem konta?</p>
					</div>
					<div className='sell-input'>
						<select name='owner' onChange={handleChangeOwner} value={owner}>
							<option hidden disabled value=''>
								Wybierz
							</option>
							<option>Tak</option>
							<option>Nie</option>
						</select>
					</div>

					<div className='sell-title'>
						<p>Czy konto było kiedyś banowane?</p>
					</div>
					<div className='sell-input'>
						<select name='ban' onChange={handleChangeBan} value={ban}>
							<option hidden disabled value=''>
								Wybierz
							</option>
							<option>Tak</option>
							<option>Nie</option>
						</select>
					</div>

					<div className='sell-title'>
						<p>Czy konto było kiedyś zawieszane/karane?</p>
					</div>
					<div className='sell-input'>
						<select name='restriction' onChange={handleChangeRestriction} value={restriction}>
							<option hidden disabled value=''>
								Wybierz
							</option>
							<option>Tak</option>
							<option>Nie</option>
						</select>
					</div>

					<div className='sell-title'>
						<p>Czy kiedykolwiek straciłeś dostęp do konta?</p>
					</div>
					<div className='sell-input'>
						<select name='access' onChange={handleChangeAccess} value={access}>
							<option hidden disabled value=''>
								Wybierz
							</option>
							<option>Tak</option>
							<option>Nie</option>
						</select>
					</div>

					<div className='sell-title'>
						<p>Serwer, na którym znajduje się konto</p>
					</div>
					<div className='sell-input'>
						<select name='server' onChange={handleChangeServer} value={server}>
							<option hidden disabled value=''>
								Wybierz
							</option>
							<option>Nordic @ East</option>
							<option>West</option>
							<option>Turcja</option>
							<option>Rosja</option>
							<option>Inne</option>
						</select>
					</div>

					<div className='sell-title'>
						<p>Czy możesz wystawić konto na Allegro?</p>
					</div>
					<div className='sell-input'>
						<select name='allegro' onChange={handleChangeAllegro} value={allegro}>
							<option hidden disabled value=''>
								Wybierz
							</option>
							<option>Tak</option>
							<option>Nie</option>
						</select>
					</div>

					<h2 style={{ marginTop: '50px' }}>Kontakt</h2>
					<div className='sell-title'>
						<p>Adres E-mail (nie używaj yahoo)</p>
					</div>
					<div className='sell-input'>
						<input type='email' name='email' onChange={handleChangeEmail} value={email} />
					</div>

					<div className='sell-title'>
						<p>Telefon Kontaktowy</p>
					</div>
					<div className='sell-input'>
						<input
							type='tel'
							pattern='[0-9]{9}'
							title='Można użyć maksymalnie 9 znaków 0-9.'
							name='tel'
							onChange={handleChangePhone}
							value={phone}
						/>
					</div>

					<div className='sell-title'>
						<p>Jak do nas trafiłeś?</p>
					</div>
					<div className='sell-input'>
						<select name='media' onChange={handleChangeMedia} value={media}>
							<option hidden disabled value=''>
								Wybierz
							</option>
							<option>Facebook</option>
							<option>Trade chat</option>
							<option>Znajomi</option>
							<option>Google</option>
							<option>Inne</option>
						</select>
					</div>
				</div>
				<div className='sell-account-submit'>
					<div className='recaptcha'>
						<ReCAPTCHA sitekey='6LcOzrQZAAAAACliB4sqyEXLzhrcQCycOYpGaJpe' onChange={reCaptcha} />
					</div>
					<input type='submit' value='Wyślij ofertę' />
				</div>
			</form>
		</div>
	);
};

export default SellForm;
