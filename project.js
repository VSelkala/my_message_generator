const sitaatit = {
    _politiikka: [],
    _urheilu: [],
    _kirjallisuus: [],
    _sananlaskut: [],
    get politiikka(){
        return this._politiikka
    },
    set politiikka(politiikkaIn){
        if (typeof politiikkaIn === 'string'){
            this._politiikka.push(politiikkaIn)
        } else {
            console.log('Virhe: syötettävän tiedon tulee olla tekstimuodossa')
        }
    },
    get urheilu(){
        return this._urheilu
    },
    set urheilu(urheiluIn){
        if (typeof urheiluIn === 'string'){
            this._urheilu.push(urheiluIn)
        } else {
            console.log('Virhe: syötettävän tiedon tulee olla tekstimuodossa')
        }
    },
    get kirjallisuus(){
        return this._kirjallisuus
    },
    set kirjallisuus(kirjallisuusIn){
        if (typeof kirjallisuusIn === 'string'){
            this._kirjallisuus.push(kirjallisuusIn)
        } else {
            console.log('Virhe: syötettävän tiedon tulee olla tekstimuodossa')
        }
    },
    get sananlaskut(){
        return this._sananlaskut
    },
    set sananlaskut(sananlaskutIn){
        if (typeof sananlaskutIn === 'string'){
            this._sananlaskut.push(sananlaskutIn)
        } else {
            console.log('Virhe: syötettävän tiedon tulee olla tekstimuodossa')
        }
    },
};

sitaatit.politiikka('Yritän puhua niin totta kuin voin. -Anneli Jätteenmäki')
sitaatit.politiikka('Voiko vitutukseen kuolla? -Paavo Väyrynen')
sitaatit.politiikka('Minä sanoin, että minä juon nyt kahvia. -Harri Holkeri')
sitaatit.politiikka('Jos ihmiset ovat näin nähneet, niin eivät he väärinkään ole nähneet, tai heillä on olut sumuiset silmät. -Paavo Arhinmäki')
sitaatit.urheilu('Saksa on paska maa. -Seppo Räty')
sitaatit.urheilu('Havuja. Havuja, perkele! -Marjo Matikainen')
sitaatit.urheilu('Elämä on ihmisen parasta aikaa. -Matti Nykänen')
sitaatit.urheilu('Korrrostan, tämä on vasta epäily -Paavo M. Petäjä')
sitaatit.urheilu('Nyt meni ääni ja toivottavasti pian menee kuvakin. -Voitto Liukkonen')
sitaatit.kirjallisuus('Kassoha sie. Tää asja on näi. Jos sie lähet juoksemaa, nii sie saat juossa Pohjalahel saakka. Kyl hää tulloo peräs, älä yhtää eppäile. Mut jos sie pysyt paikollais etkä lähe hitoilkaa, nii minkä hää tekköö? Et sie sovi hänen kansaa sammaa monttuu. Se on tään puolustussovan ratekia. -Rokka, Tuntematon sotilas')
sitaatit.kirjallisuus('Silmät kattoo niin kieroon, että keskiviikkona näkee molemmat sunnuntait. -Rahikainen, Tuntematon sotilas')
sitaatit.kirjallisuus('Kaikki muuttuu vaikeaksi, jos haluaa omistaa esineitä, kantaa niitä mukanaan ja pitää ominaan. Minä vain katselen niitä - ja kun lähden tieheni, ovat ne minulla päässäni. Minusta se on hauskempaa kuin matkalaukkujen raahaaminen. -Nuuskamuikkunen')
sitaatit.kirjallisuus('Oli nainen kuinka kaunis tahansa, hän haluaa aina olla hivenen kauniimpi. -Muumimamma')
sitaatit.kirjallisuus('Jos minä löytäisin jostain tarpeeksi pienen poikaystävän, minäkin olisin kevytmielinen. -Pikku-Myy')
sitaatit.sananlaskut('Parempi tuttu paha kuin tuntematon hyvä.')
sitaatit.sananlaskut('Kyllä sopu tilaa saa ja rakkaus reisiä levittää.')
sitaatit.sananlaskut('Ystävät saa valita itse, sukulaiset valitsee piru.')
sitaatit.sananlaskut('Parempi vähän annettu kuin paljon luvattu.')
sitaatit.sananlaskut('Ei hoppu hyväksi ole, eikä kiire kunniaksi.')
