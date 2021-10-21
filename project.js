const dude = {
    _head: [],
    _upperBody: [],
    _lowerBody: [],
    get head(){
        return this._head
    },
    set head(headIn){
        if (typeof headIn === 'string'){
            this._head.push(headIn)
        } else {
            console.log('Virhe: syötettävän tiedon tulee olla tekstimuodossa')
        }
    },
    get upperBody(){
        return this._upperBody
    },
    set upperBody(upperBodyIn){
        if (typeof upperBodyIn === 'string'){
            this._upperBody.push(upperBodyIn)
        } else {
            console.log('Virhe: syötettävän tiedon tulee olla tekstimuodossa')
        }
    },
    get lowerBody(){
        return this._lowerBody
    },
    set lowerBody(lowerBodyIn){
        if (typeof lowerBodyIn === 'string'){
            this._lowerBody.push(lowerBodyIn)
        } else {
            console.log('Virhe: syötettävän tiedon tulee olla tekstimuodossa')
        }
    },
};

dude.head = ('')

