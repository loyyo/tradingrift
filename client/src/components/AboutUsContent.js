import React from 'react'
import orc from '../images/orc.png';

const AboutUsContent = () => {
    return(
        <div className='about-us-all'>
            <div className='about-us-idea'>
                <h3>Jak powstał pomysł?</h3>
                <p>Pomysł na taką działalność powstał, ponieważ sami jesteśmy graczami
                    i zdajemy sobie sprawę z tego, że kontakt z pomocą techniczną w dużych 
                    firmach jest frustrujący i często niesatysfakcjonujący. Dotyczy to 
                    kuriozalnych żądań jakie dostawca gier stawia wobec osoby kontaktującej
                    się z pomocą techniczną (np.  wymaganie przesyłania kopii dokumentów) 
                    jak i pewnych uciążliwych działań (blokady konta, których powodem jest
                    zmiana adresu IP, zawieszanie kont, na których grała inna osoba itp.)</p>
            </div>
            <div className='about-us-buying'>
                <h3>Kupowanie dostępu do kont</h3>
                <p>Zależy nam na zadowoleniu naszych Kontrahentów - dlatego zawsze oferujemy 
                    uczciwą cenę za stosowne prawa do używanej gry (której elementem 
                    może być konto), wynikającą z zaawansowania i osiągnięć. Formy 
                    płatności: przelew do dowolnego banku krajowego, Payu oraz Paypal. 
                    Zależy nam, aby osoby zbywające na naszą rzecz stosowne prawa 
                    (których elementem może być konto) czuły się bezpiecznie, dlatego 
                    kontakt z nami jest dostępny przez cały czas zawierania transakcji.</p>
            </div>
            <div className='about-us-animation'>
                <img src={orc} alt='' />
            </div>
            <div className='about-us-problem'>
                <h3>Problem twórców gier</h3>
                    <p>Wielkie korporacje tworzące gry starają się zabronić w swoim
                        regulaminie odsprzedaży używanych gier, w szczególności
                        stosownych praw do korzystania z utworu prawnoautorskiego, 
                        by zwiększyć swoje zyski i uniemożliwić graczom wyciągnięcie 
                        z używanej gry uczciwej ceny. Kupującego natomiast stawiają w 
                        problematycznej sytuacji gdy przy kontakcie z supportem wymagają 
                        szczegółowych danych lub dokumentów ze względu na inne IP lub 
                        problem z płatnością. Często wykorzystują swoją uprzywilejowaną 
                        pozycję, która pozwala (wg. ich regulaminu) zrobić z kontem co 
                        im się żywnie podoba, nie zostawiając graczowi realnej szansy na 
                        odwołanie się od decyzji dotyczącej konta, za które zapłacił. W tym 
                        miejscu wchodzimy my, jako pośrednik transakcji które i tak 
                        wykonujecie, wyręczamy was w transakcji oraz kontakcie z supportem 
                        czy problemach z kupującymi. Nasza firma działa w oparciu zarówno 
                        o przepisy prawa, jak i wytyczne określone w orzecznictwie 
                        Trybunału Sprawiedliwości Unii Europejskiej, w dwóch głośnych 
                        sprawach (sygn. akt: C 166/15 i C -128/11). Zasadniczo wyroki w 
                        tych sprawach, z zastrzeżeniem określonych w nich warunków, idą w 
                        kierunku potwierdzenia możliwości sprzedaży kopii programu 
                        komputerowego przez nabywcę, nawet jeśli podmiot uprawniony z praw 
                        autorskich w warunkach licencji przewidział zakaz dalszego obrotu 
                        tym programem.</p>
            </div>
        </div>
    )
}

export default AboutUsContent