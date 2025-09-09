/** Organizamos matriz */

let diadelasemana = prompt("Ingrese el día de la semana")
diadelasemana = diadelasemana.toLowerCase();
let lapersonaes = [];
let horario = [];
let diainvalido = [];
let matrizhorarios = [5][3];

matrizhorarios = [

    ["lunes",  "María", "7:00 a.m. a 11:00 a.m."],
    ["martes", "Luis",  "8:00 a.m. a 12:00 p.m."],
    ["miercoles", "Antonia", "9:00 a.m. a 3:00 p.m."],
    ["jueves", "Pedro", "6:00 a.m. a 12:00 p.m."],
    ["viernes", "Marisa", "2:00 p.m. a 8:00 p.m."]
    
];

//console.log(matrizhorarios);

/** Vamos hacer el algoritmo que llame el dia
 * de la persona
 */


for (let fila = 0; fila < matrizhorarios.length; fila++){
    //console.log (matrizhorarios[fila]);

    if(diadelasemana === matrizhorarios[fila][0]){
        lapersonaes = matrizhorarios[fila][1]
        horario = matrizhorarios[fila][2]
        

    }

    else {
       diainvalido = ("Día invalido");
    }
}

console.log ("la persona encargada es " + lapersonaes + ' '+ horario);