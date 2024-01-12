// Perfil del usuario
// Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'

// const nombreUsuario = prompt('Ingrese su nombre de usuario:');
// const edadUsuario = prompt('Ingrese su edad:');
// const peliculasFavoritas = [];

// const cantidadPeliculas = prompt('¿Cuántas películas favoritas desea ingresar?');

// for (let i = 0; i < cantidadPeliculas; i++) {
//     const pelicula = prompt(`Ingrese su película favorita #${i + 1}:`);
//     peliculasFavoritas.push(pelicula);
// }

// console.log(`Nombre de usuario: ${nombreUsuario}`);
// console.log(`Edad: ${edadUsuario} años`);
// console.log('Películas favoritas:');
// peliculasFavoritas.forEach(pelicula => {
//     console.log(`La película ${pelicula} es una de mis favoritas`);
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para solicitar datos al usuario
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    rl.question('Ingrese su nombre de usuario: ', (nombreUsuario) => {
      rl.question('Ingrese su edad: ', (edadUsuario) => {
        rl.question('¿Cuántas películas favoritas desea ingresar? ', (cantidadPeliculas) => {
          const peliculasFavoritas = [];
          obtenerPeliculas(0, cantidadPeliculas, peliculasFavoritas, resolve);
        });
      });
    });
  });
}

// Función recursiva para solicitar lista de películas favoritas
function obtenerPeliculas(indice, cantidad, peliculas, resolve) {
  if (indice < cantidad) {
    rl.question(`Ingrese su película favorita #${indice + 1}: `, (pelicula) => {
      peliculas.push(pelicula);
      obtenerPeliculas(indice + 1, cantidad, peliculas, resolve);
    });
  } else {
    resolve(peliculas);
  }
}

// Función para mostrar información en la consola
function mostrarInformacion(nombreUsuario, edadUsuario, peliculasFavoritas) {
  console.log(`Nombre de usuario: ${nombreUsuario}`);
  console.log(`Edad: ${edadUsuario} años`);
  console.log('Películas favoritas:');
  peliculasFavoritas.forEach(pelicula => {
    console.log(`La película ${pelicula} es una de mis favoritas`);
  });
  rl.close();
}

// Ejecutar el programa
async function ejecutarPrograma() {
  const nombreUsuario = await obtenerDatos();
  const edadUsuario = await obtenerDatos();
  const peliculasFavoritas = await obtenerDatos();
  mostrarInformacion(nombreUsuario, edadUsuario, peliculasFavoritas);
}

ejecutarPrograma();