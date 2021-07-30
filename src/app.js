const yargs = require('../config/yargs');
const colors = require('colors');
const { guardarMultiplicar } = require('../helpers/multiplicar');

const multiplicacion = (numero) => {
    let resultado = '';
   
    for (let index = 0; index <= yargs.h; index++) {
        resultado += `${numero} * ${index} = ${numero * index}\n`;
    };

    if(yargs.l){
        console.log('========================='.green);
        console.log(`   TABLA DEL ${numero}`.red);
        console.log('========================='.green);
        console.log(resultado.bold);
    }
    guardarMultiplicar(numero, resultado)
        .then(data => console.log(data.random))
        .catch(err => console.log(err));
};

const number = yargs.b || 5;
multiplicacion(parseInt(number));
