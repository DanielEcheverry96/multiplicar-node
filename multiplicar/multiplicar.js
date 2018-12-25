// requireds
const fs = require('fs'); // Paquetes por defecto en Node
const colors = require('colors');
// const fs = require('express') Paquetes instalados;
// const fs = require('./fs'); Archivos creados por nosotros 


// let crearArchivo = (base) => {
//     return new Promise((resolve, reject) => {

//         if (!Number(base)) {
//             reject(`El valor introducido "${ base }" no es un número`);
//             return;
//         }

//         let data = '';

//         for (let i = 1; i <= 10; i++) {
//             data += `${ base } * ${ i } = ${ base * i } \n`;
//         }
//         fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//             if (err)
//                 reject(err);
//             else
//                 resolve(`tabla-${ base }.txt`);
//         });
//     });
// }

let crearArchivo = async(base, limite) => {
    if (!Number(base)) {
        throw new Error(`El valor introducido "${ base }" no es un número`);
    }

    if (!Number(limite)) {
        throw new Error(`El valor introducido "${ limite }" no es un número`);
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i } \n`;
    }

    fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
        if (err) throw new Error(err);
    });
    return `tabla-${ base }-al-${ limite }.txt`;
};

let listarTabla = (base, limite) => {

    let data = '';
    console.log('========================'.green);
    console.log(`===== Tabla de ${ base } =====`.green);
    console.log('========================'.green);

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    console.log(data);

}

module.exports = {
    crearArchivo,
    listarTabla
};