
const yargs = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Indice para generar la multiplicacion'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        describe:'Muestra la tabla de multiplicar'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'Rango del Multiplicador'
    })
    .check((argv,err)=>{
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero'
        }else{
            return true;
        }
    })
.argv;
module.exports = yargs;