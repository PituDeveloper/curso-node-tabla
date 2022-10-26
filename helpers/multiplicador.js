const fs = require('fs');
const colors = require('../node_modules/colors');

const crearArchivo = async(base = 5, listar, hasta = 10) => {

    try {
        
        let salida = '';
        for (let index = 1; index <= hasta; index++) {
            salida+=(`${base} ${"*"} ${index} = ${base*index}\n`);
        }

        if(listar){
            console.log('===================');
            console.log('  Tabla del: '.green, colors.bgRed(base));
            console.log('===================');
            console.log(colors.rainbow(salida));
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return colors.blue.underline(`Tabla de ${base} creada`);
    } catch (err) {
        throw err
    }


    // return promesa = new Promise((resolve, reject) => {
        
    //     console.log('===================');
    //     console.log('  Tabla del: ', base);
    //     console.log('===================');

    //     let salida = '';
    //     for (let index = 1; index <= 10; index++) {
    //         salida+=(`${base} * ${index} = ${base*index}\n`);
    //     }

    //     console.log(salida);

    //     fs.writeFileSync(`tabla-${base}.txt`, salida);

    //     (salida)
    //         ?resolve(`Tabla de ${base} creada`)
    //         :reject("No Creado");
    // })


    // console.log('===================');
    // console.log('  Tabla del: ', base);
    // console.log('===================');

    // let salida = '';
    // for (let index = 1; index <= 10; index++) {
    //     salida+=(`${base} * ${index} = ${base*index}\n`);
    // }

    // console.log(salida);

    // fs.writeFileSync(`tabla-${base}.txt`, salida);

    // // fs.writeFile(`tabla-${a}.txt`, salida, (err) => {
    // //   if (err) throw err;
    // //   console.log('Archivo Guardado!!');
    // // });

    // console.log(`Tabla de ${base} creada`);

}


//exportacion de un objeto que contiene una funcion
module.exports = {
    crearArchivo
}