
const fs = require('fs');


const guardarMultiplicar = async (base, data) => {
    try {
       fs.writeFileSync(`./dist/tabla-${base}.txt`, data);
       return `Tabla del ${base} creada`;
    } catch (error) {
        return error;
    }
}

module.exports = {
    guardarMultiplicar,
}

