alert("Hola! Estas comenzando a jugar el simulacro de la Universidad de Michigan.");
let universidad = prompt("Elegí en que Universidad querés cursar: ");
let turno = prompt("Turno Mañana, Tarde o Noche?: ");

/* function names() {
    let nombres = [];
    let cont = '';
    let x;

    for (i = 0; i <= 2; i++) {
        x = prompt("Ingresa tu nombre:", "");
        nombres.push(x);
    }

    for (i = 0; i <= 2; i++) {
        cont += nombres[i] + " ";
    }
} */

const estudiante = [
    {
    nombre: "Facundo",
    carrera: "Administración de Empresas",
    cant_materias: 1,
    nombre_materia: "Análisis",
    promedio: 7
},
    {
    nombre: "Luca",
    carrera: "Ingeniería Mecánica",
    cant_materias: 2,
    nombre_materia: "Analisis y Fisica",
    promedio: 5
},
    {
    nombre: "Francisco",
    carrera: "Ingeniería Industrial",
    cant_materias: 3,
    nombre_materia: "Análisis, Física y Química",
    promedio: 4
},
    {
    nombre: "Nicolas",
    carrera: "Licenciado en Sistemas",
    cant_materias: 4,
    nombre_materia: "Análisis, Química, Algoritmos y Física",
    promedio: 4
},
    {
    nombre: "Fernando",
    carrera: "Licenciado en Sistemas",
    cant_materias: 5,
    nombre_materia: "Análisis, Química, Arq de Datos, Algoritmos y Física",
    promedio: 6
},
    {
    nombre: "Manuel",
    carrera: "Arquitecto",
    cant_materias: 3,
    nombre_materia: "Medios de Representación, Establidad y Física",
    promedio: 2
}
]

alert("Vas a cursar en la " + universidad + ", en el Turno " + turno);

let alumnos_seleccionados = () => {
    return estudiante.filter((estudiante)=>(estudiante.promedio > 6))
}

for (const alumno of alumnos_seleccionados()) {
    alert(`Y aquí, el alumno con mayor promedio es ${alumno.nombre}`);
    // console.log(`${alumno.nombre}`)
}

console.log(alumnos_seleccionados());
