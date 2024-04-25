document.addEventListener('DOMContentLoaded', function() {
    const distribuirBtn = document.getElementById('distribuirBtn');
    const numMaletasInput = document.getElementById('numMaletas');
    const resultadoDiv = document.getElementById('resultado');
  
    // Function to distribute the suitcases
    function distribuirMaletas() {
      // Get the number of suitcases from the input
      let numMaletas = numMaletasInput.value;
  
      // Verify that the value is a positive integer
      if (isNaN(numMaletas) || numMaletas <= 0 || numMaletas.includes(".")) {
        alert("Error: You need to insert a positive number.");
        return;
      }
     
     // Initialize variables
     let bingo = 1;
     let maletas = 0;
     let resultado = "";
  
     // Distribute the suitcases in the bingos
     while (numMaletas > 0) {
       let maxMaletas = (bingo === 1) ? 35 : 40;
       let malasEnBingo = Math.min(numMaletas, maxMaletas);
       resultado += `Bingo ${bingo}: ${malasEnBingo} suitcases<br>`;
       numMaletas -= malasEnBingo;
       bingo++;
     }
  
     // Show the result on the page
     resultadoDiv.innerHTML = resultado;
    }
  
    // Add event listener to the "Distribuir" button
    distribuirBtn.addEventListener('click', distribuirMaletas);
  
    // Add event listener to the Enter key on the input
    numMaletasInput.addEventListener('keydown', function(event) {
      if (event.keyCode === 13 || event.key === 'Enter') {
        distribuirMaletas();
      }
    });
  })