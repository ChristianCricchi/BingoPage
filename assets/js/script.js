function calculateBingo() {
    // Get the number of bags from the input field
    let NB = parseInt(document.getElementById("bags").value);
  
    // Calculate the first "Bingo"
    let NB1 = (NB - 35);
    let Bingo1 = (NB < 35) ? NB : 35;
    document.getElementById("bingo1").textContent = Bingo1;
  
    // Calculate the second "Bingo"
    let NB2 = NB1 - 40;
    let Bingo2 = (NB < 35) ? 0 : (NB1 < 40) ? NB1 : 40;
    document.getElementById("bingo2").textContent = Bingo2;
  
    // Calculate the third "Bingo"
    let NB3 = NB2 - 40;
    let Bingo3 = (NB1 < 40) ? 0 : (NB2 < 40) ? NB2 : 40;
    document.getElementById("bingo3").textContent = Bingo3;
  
    // Calculate the fourth "Bingo"
    let NB4 = NB3 - 40;
    let Bingo4 = (NB2 < 40) ? 0 : (NB3 < 40) ? NB3 : 40;
    document.getElementById("bingo4").textContent = Bingo4;
  
    // Calculate the fifth "Bingo"
    let NB5 = NB4 - 40;
    let Bingo5 = (NB3 < 40) ? 0 : (NB4 < 40) ? NB4 : 40;
    document.getElementById("bingo5").textContent = Bingo5;
  
    // Calculate the sixth "Bingo"
    let NB6 = NB5 - 40;
    let Bingo6 = (NB4 < 40) ? 0 : (NB5 < 40) ? NB5 : 40;
    document.getElementById("bingo6").textContent = Bingo6;
  
    // Calculate the seventh "Bingo"
    let NB7 = NB6 - 40;
    let Bingo7 = (NB5 < 40) ? 0 : (NB6 < 40) ? NB6 : 40;
    document.getElementById("bingo7").textContent = Bingo7;
  
    // Check for excess
    let excess = NB - 235;
    if (excess > 0) {
      document.getElementById("excess").textContent = `Excess: ${excess}`;
    } else {
      document.getElementById("excess").textContent = "Excess: 0";
    }
  }
  
  // Add a keydown event listener to the document
  document.addEventListener('keydown', function(event) {
    // Check if the pressed key is "Enter"
    if (event.key === 'Enter') {
      // Call the calculation function
      calculateBingo();
    }
  });