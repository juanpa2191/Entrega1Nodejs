const opciones = {
    curso:{
        programacion:{
            id:1,
            nombre:'Curso NodeJs',
            duracion:26,
            valor:0
        },
        ingles:{
            id:2,
            nombre:'Curso ingles',
            duracion:32,
            valor:25000
        },
        matematicas:{
            id:3,
            nombre:'Calculo diferencial',
            duracion:64,
            valor:321000
        }
    }
};

let mostrarCurso = (opciones) =>
{
    setTimeout(() => {
        console.log('El curso se llama '+ opciones.curso.programacion.nombre+' Tiene una duracion de '+opciones.curso.programacion.duracion+
        ' y un valor de '+ opciones.curso.programacion.valor + ' pesos');
        setTimeout(() => {
            console.log('El curso se llama '+ opciones.curso.ingles.nombre+' Tiene una duracion de '+opciones.curso.ingles.duracion+
            ' y un valor de '+ opciones.curso.ingles.valor + ' pesos');
            setTimeout(() => {
                console.log('El curso se llama '+ opciones.curso.matematicas.nombre+' Tiene una duracion de '+opciones.curso.matematicas.duracion+
                ' y un valor de '+ opciones.curso.matematicas.valor + ' pesos');
            }, 2000);
        }, 2000);    
    }, 2000);
};

module.exports = {
    opciones,
    mostrarCurso
}