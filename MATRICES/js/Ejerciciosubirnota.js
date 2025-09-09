let matrizfiguras = [];

for (let filas = 0; filas < 10; filas++) {
  matrizfiguras[filas] = [];

  for (let columnas = 0; columnas < 10; columnas++) {
    if (columnas === filas) {   
      matrizfiguras[filas][columnas] = "@";
    } else {
      matrizfiguras[filas][columnas] = "-";
    }
  }
}

  
for (let i = 0; i < matrizfiguras.length; i++) {
  console.log(matrizfiguras[i]);
}
