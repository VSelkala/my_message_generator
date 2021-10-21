const rapperName = {
    _firstName: [],
    _middleName: [],
    _lastName: [],
    get firstName(){
        return this._firstName[Math.floor(Math.random() * this._firstName.length)]
    },
    set firstName(firstNameIn){
        if (typeof firstNameIn === 'string'){
            this._firstName.push(firstNameIn)
        } else {
            console.log('ERROR: String needed')
        }
    },
    get middleName(){
        return this._middleName[Math.floor(Math.random() * this._middleName.length)]
    },
    set middleName(middleNameIn){
        if (typeof middleNameIn === 'string'){
            this._middleName.push(middleNameIn)
        } else {
            console.log('ERROR: String needed')
        }
    },
    get lastName(){
        return this._lastName[Math.floor(Math.random() * this._lastName.length)]
    },
    set lastName(lastNameIn){
        if (typeof lastNameIn === 'string'){
            this._lastName.push(lastNameIn)
        } else {
            console.log('ERROR: String needed')
        }
    },
};

rapperName.firstName = ('Icy')
rapperName.firstName = ('Dr.')
rapperName.firstName = ('Slim')
rapperName.firstName = ('Dirty')
rapperName.firstName = ('Old')
rapperName.firstName = ('The')
rapperName.firstName = ('Big')
rapperName.firstName = ('Lil')
rapperName.middleName = ('Ice')
rapperName.middleName = ('Hard')
rapperName.middleName = ('L.')
rapperName.middleName = ('')
rapperName.middleName = ('Dirty')
rapperName.middleName = ('Shady')
rapperName.lastName = ('Bastard')
rapperName.lastName = ('Cube')
rapperName.lastName = ('Tea')
rapperName.lastName = ('Killa')
rapperName.lastName = ('Rhymes')
rapperName.lastName = ('Smalls')
rapperName.lastName = ('X')

console.log(`Your rapper name is: ${rapperName.firstName} ${rapperName.middleName} ${rapperName.lastName}`);
