const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: "Es la base de multiplicar"
                    },
                    'l':{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: "Muestra la tabla de multiplicar en consola"
                    },
                    'h':{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: "Cantidad maxima por la que quiere ser multiplicado"
                    },
                })
                .check((argv, options) => {
                    if( isNaN(argv.b)){
                        throw new Error("Base tiene que ser numero")
                    }
                    return true;
                })
                .argv;

module.exports = argv;