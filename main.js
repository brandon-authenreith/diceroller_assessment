var dieRolls = [];
const buttonRoll = document.querySelector("#rollButton")
const rollInput = document.querySelector("#numberDiceRolled")
const totalRollNumber = document.querySelector("#total")
const showAllButton = document.querySelector("#showAllRolls")
const showDaRolls = document.querySelector("#allRollsElement")
var diceRollTotal = 0

buttonRoll.addEventListener ("click", function(){
   let daRoll = rollInput.value;
    let counter = 0

   while (counter < daRoll){
    let rollResult = Math.ceil(Math.random() * 6 );
    dieRolls.push(rollResult);
    diceRollTotal += rollResult
    counter += 1

}
    
    totalRollNumber.innerHTML = "You rolled a " + (diceRollTotal);
})

showAllButton.addEventListener ("click", function(){
    let counter = 0
    while (counter < dieRolls.length) {
    showDaRolls.innerHTML += "<li>" + dieRolls[counter] + "</li>" 
    counter += 1
    }
})