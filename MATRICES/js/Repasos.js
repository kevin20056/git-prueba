// Definimos una clase
class Carro {
  constructor(marca, color) {
    this.marca = marca;
    this.color = color;
  }

  // Método
  arrancar() {
    console.log(`${this.marca} de color ${this.color} está arrancando 🚗💨`);
  }

  frenar() {
    console.log(`${this.marca} está frenando 🛑`);
  }
}

// Creamos objetos
let carro1 = new Carro("Toyota", "Rojo");
let carro2 = new Carro("Mazda", "Azul");

// Usamos métodos
carro1.arrancar();  // 👉 Toyota de color Rojo está arrancando 🚗💨
carro2.frenar();    // 👉 Mazda está frenando 🛑