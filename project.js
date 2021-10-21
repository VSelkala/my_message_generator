const name = {
    _firstName: [],
    _middleName: [],
    _lastName: [],
    get firstName(){
        return this._firstName
    },
    set firstName(firstNameIn){
        if (typeof firstNameIn === 'string'){
            this._firstName.push(firstNameIn)
        } else {
            console.log('Virhe: syötettävän tiedon tulee olla tekstimuodossa')
        }
    },
    get middleName(){
        return this._upperBody
    },
    set middleName(middleNameIn){
        if (typeof middleNameIn === 'string'){
            this._middleName.push(middleNameIn)
        } else {
            console.log('Virhe: syötettävän tiedon tulee olla tekstimuodossa')
        }
    },
    get lastName(){
        return this._lastName
    },
    set lastName(lastNameIn){
        if (typeof lastNameIn === 'string'){
            this._lastName.push(lastNameIn)
        } else {
            console.log('Virhe: syötettävän tiedon tulee olla tekstimuodossa')
        }
    },
};