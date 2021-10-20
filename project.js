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

