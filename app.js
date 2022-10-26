const { crearArchivo } = require('./helpers/multiplicador')
const argv = require('./config/yargs')

console.clear();


//console.log(process.argv);
console.log(argv);
console.log("Base Yargs: "+argv.base);


// Leer argumnetos de comandos
// console.log(process.argv);
// const [,,arg3 = '--base=5' ] = process.argv
// const [, base = 5] = arg3.split('=');


//console.log(base)
//const base = 3;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo))
    .catch( err => console.log(err))