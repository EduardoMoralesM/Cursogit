/*
//declarativa
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

//expresiva

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre('Diego');
*/

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};



var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}

if (false === !true) {
     console.log(false == true) }
     
     else { console.log(true === !false) }







var miAuto = {
    marca: "ford",
    modelo: "Mustang",
    anio: 2022,
    detalledeauto: function(){
        console.log('Auto ${this.modelo} ${this.anio}');
    }
};
//miAuto.detalledeauto();





function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}

var autonuevo = new auto("Tesla","Model 3",2020);


function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }




  var articulos = [
      {nombre: "Bici", costo: 3000},
      {nombre: "TV", costo: 2500},
      {nombre: "Celular", costo: 1000},
      {nombre: "Laptop", costo: 7000},
  ];


  //metodo 1- filter
  var articulosfiltrados = articulos.filter(function(articulo){
      return articulo.costo <= 500
  });

  //mapping

  var nombrearticulo=articulos.map(function(articulo){
      return articulo.nombre

  });

//find
  var encuentraarticulo = articulos.find(function(articulo){
      return articulo.nombre === "Laptop"
  });

  //for each---Ejecuta la funcion indicada una vez por  ada elemento del array
  articulos.forEach(function(articulo){
      console.log(articulo.nombre); 
  });

//some retorna true or false
  var articulosbaratos = articulos.some(function(articulo){
      return articulo.costo <= 2000;
  });






  