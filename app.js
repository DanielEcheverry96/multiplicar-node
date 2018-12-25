// requireds
// const fs = require('fs'); Paquetes por defecto en Node
const colors = require('colors/safe');

const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// const fs = require('express') Paquetes instalados;
// const fs = require('./fs'); Archivos creados por nosotros 

// let base = parseInt(process.argv[2]);
// console.log(typeof process.argv[2]);

// let argv2 = process.argv;
// console.log('base', argv.base, 'limite', argv.limite);

// console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crear(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

function crear(base, limite) {
    crearArchivo(base, limite)
        .then(archivo => console.log(`Archivo creado: ${ colors.magenta(archivo) }`))
        .catch(err => console.log(err));
}