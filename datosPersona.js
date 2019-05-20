const datos ={
    nombre:{
        alias:'n',
        demand:true
    },
    id:{
        alias:'i',
        demand:true
    },
    cedula:{
        alias:'c',
        demand:true
    }
};

const argv = require('yargs').command('inscripcion','Inscripcion', datos)
.argv;

const fs = require('fs');
let crearArchivo = (datos) =>
{
    texto = 'El estudiante '+ datos.nombre + '\n'+
    'Con cedula ' + datos.cedula+'\n'+
    'se ha matriculado  en el curso'

    fs.writeFile('matricula.txt', texto, (error) => {
        if (error) throw(error);
        console.log('se ha creado el archivo');
    });
};

module.exports = {
    datos,
    crearArchivo
}