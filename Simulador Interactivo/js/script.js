const num1_materias = 1;
const num2_materias = 2;
const num3_materias = 3;
const num4_materias = 4;

const materia1 = "Análisis Matemático";
const materia2 = "Física";
const materia3 = "Química";
const materia4 = "Algoritmos y Programación";

let cant_materias = parseInt(prompt("Hola, cuantas materias estas cursando?"));
let nombre_materia;  

if(cant_materias <= num1_materias){
    nombre_materia = prompt("Que materia es?");
} else if (cant_materias > num1_materias) {  
    nombre_materia = prompt("Cuales materias son?");
}

if(cant_materias <= num1_materias){
    alert("Estas cursando " + cant_materias + " materia.\n");
    alert("Y ella es " + nombre_materia);
} else if (cant_materias > num1_materias) {  
    alert("Estas cursando " + cant_materias + " materias.\n");
    alert("Y ellas son " + nombre_materia);
}

// const materias = ["Análisis Matemático", "Física", "Química", "Algoritmos y Programación", "Álgebra", "Probabilidad y Estadística", "Matemática Discreta", "Estructura del Computador", "Organización de Datos"];

const PORCENTAJE_ABANDONO = 50;
if(cant_materias >= 3){
    alert("El porcentaje de abandono es: " + PORCENTAJE_ABANDONO + "%");
    let materias_a_abandonar = cant_materias * PORCENTAJE_ABANDONO / 100;
    alert("Lamento informarte que vas a abandonar " + materias_a_abandonar + " materias, es un estudio cientifico de la Universidad de Michigan.");
} else {
    alert("Quedate tranqui bro, las vas a poder rendir BIEN :)")
}

const estudiante1 = {
    cant_materias: num1_materias,
    nombre_materia: materia1,
    porcentaje_abandono: PORCENTAJE_ABANDONO
}

console.log(estudiante1);