function distribuirMaletas() {
  // Solicitar el número de maletas al usuario
  let numMaletas;
  while (true) {
    numMaletas = prompt("Ingrese el número de maletas (entero positivo):");

    // Verificar que el valor ingresado sea un número entero positivo
    if (isNaN(numMaletas) || numMaletas <= 0 || numMaletas.includes(".")) {
      alert("Error: Debe ingresar un número entero positivo.");
    } else {
      break;
    }
  }
 
 // Inicializar variables
 let bingo = 1;
 let maletas = 0;

 // Distribuir las maletas en los bingos
 while (numMaletas > 0) {
   let maxMaletas = (bingo === 1) ? 35 : 40;
   let malasEnBingo = Math.min(numMaletas, maxMaletas);
   console.log(`Bingo ${bingo}: ${malasEnBingo} maletas`);
   numMaletas -= malasEnBingo;
   bingo++;
 }
}

// Llamar a la función
distribuirMaletas();