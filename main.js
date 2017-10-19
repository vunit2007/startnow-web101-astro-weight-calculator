var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],

  ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];



function calculateWeight(weight, planetName) {
 for(var i = 0; i < planets.length; i++) {
  const gravity = planets[i][1];
   currentPlanet = planets[i][0]; 
if(currentPlanet === planetName) { 
  return gravity * weight;
} 
}
}
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild` 

function handleClickEvent() {
let userWeight = document.getElementById("user-weight").value;
let sel = document.getElementById("planets");
var planetName = sel.options[sel.selectedIndex].value;
let result = calculateWeight(userWeight, planetName);
document.getElementById("output").innerHTML="If you were on " + planetName + ", you would weigh " + result + "lbs!";
}


    
    // 3. Create a variable called userWeight and assign the value of the user's weight.
  
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  
    // 5. Create a variable called result and assign the value of the new calculated weight.
  
    // 6. Write code to display the message shown in the screenshot.
  
  