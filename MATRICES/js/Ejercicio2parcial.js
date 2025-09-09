let producto = prompt("Ingrese el día de la semana")
producto = producto.toLowerCase();
let precio = '';


let matrizproductos = [6][2];

matrizproductos = [

    ["smart tv",  "1,600,000"],
    ["pc grandes", "2,000,000"],
    ["portatiles", "1,500,000"],
    ["monitores", "650,000"],
    ["teclados", "50,000"],
    ["ratones", "40,000"],
    
];

console.log(matrizproductos);

for (let fila = 0; fila < matrizproductos.length; fila++){
    console.log (matrizproductos[fila]);

    if(producto == matrizproductos[fila][0]){
        precio = matrizproductos[fila][1];
        
    }

}

console.log ('el precio es: ' + precio);