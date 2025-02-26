function interactuarCadenas(cadena1, cadena2) {
  let string = "";
  const char1 = cadena1.split("");
  const char2 = cadena2.split("");
  const lengthMin = Math.min(char1.length, char2.length);

for(let i = 0; i < lengthMin; i++)  
  if(char1[i] === char2[i]){
    string += char1[i]
  }else{string += "0";}
  return string;
}
const resultado = interactuarCadenas("+-+","+--")
console.log(resultado); //"+-0"

function generarApodo(nombre) {
  if(nombre.length < 4){
    throw new Error("Nombre muy corto");
  }

  const vocales = ['a', 'e', 'i', 'o', 'u'];

  let nuevoApodo;
  if(vocales.includes(nombre[2])){
    nuevoApodo = 4;
  }else {
    nuevoApodo = 3;
  }
  const apodo = nombre.slice(0, nuevoApodo);
  return apodo;
}
generarApodo("Robert") // "Rob" 
generarApodo("Kimberly") // "Kim" 
generarApodo("Samuel") // "Sam"  
generarApodo("Jeannie") // "Jean" 
generarApodo("Douglas") // "Doug"
generarApodo("Gregory") // "Greg"


function obtenerMarcador(texto) {
  
  const rango = {
    "cero": 0, 
    "uno" : 1,
    "dos" : 2,
    "tres": 3,
    "cuatro": 4,
    "cinco": 5,
    "seis": 6,
    "siete": 7,
    "ocho": 8,
    "nueve": 9,
  }
  const arr = texto.split(" ");
  let marcador = [];

  for (let propiedad of arr){
    if(propiedad in rango){
      marcador.push(rango[propiedad]); 
    }
  }
  if(marcador.length === 0){
    marcador = [0,0];
    
  }
  return marcador;
}

obtenerMarcador("El marcador es cuatro cero") // [4, 0]
obtenerMarcador("nuevo marcador: dos tres") // [2, 3]
obtenerMarcador("dos dos") // [2, 2]
obtenerMarcador("Arsenal acaba de recibir otro gol, dos cero") // [2, 0]


class Barco {
  constructor(calado, tripulacion){
    this.calado = calado;
    this.tripulacion = tripulacion;
  }
  valeLaPena() {
    const totalCalado = this.calado - (this.tripulacion * 1.5);
    return totalCalado > 20;
  }
}

const PerlaNegra = new Barco(32, 5);
PerlaNegra.valeLaPena(); //deberia retornar true;

const titanic = new Barco(15, 10);
titanic.valeLaPena();//deberia retornar false;