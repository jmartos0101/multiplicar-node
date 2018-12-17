const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar.js');

//console.log(argv);

let comando = argv._[0];
4
switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
            .then(lista => console.log($lista))
            .catch(e => console.log(e));
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
        .catch(e => console.log(e));
    break;

    default:
        console.log('Comando no reconocido');
}
//console.log(process.argv);
/* let argv2 = process.argv;
console.log('Base: '+ argv.base);
console.log('Limite: '+argv.limite); */


/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

/*   */