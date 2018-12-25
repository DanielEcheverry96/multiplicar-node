const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Guarda en un archivo la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
};