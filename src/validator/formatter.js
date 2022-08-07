function trim(){
    const trimname = '   functionUp   ';
    console.log(trimname.trim())
}

function changetoLowerCase(){
    const lowercasename= 'My name is Subhajit Banerjee of Plutonium Batch';
    console.log(lowercasename.toLowerCase())
}

function changeToUpperCase(){
    const uppercasename = 'My name is Subhajit Banerjee of Plutonium Batch';
    console.log(uppercasename.toUpperCase())

}




module.exports.trim =trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase= changeToUpperCase