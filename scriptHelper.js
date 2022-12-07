// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
let div = document.getElementByID("missionTarget")
div.innerHTML= `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
   
}

function validateInput(testInput) {
   let cargoAndFuelInput = Number(testInput);
   if (testInput === ""){
    return "Empty";
   }else if (isNaN(cargoAndFuelInput)){
    return "Not a Number";
   }else if(isNaN(cargoAndFuelInput) === false){
    return "Is a Number";
   }
    
           
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let cargo = document.getElementById("cargoStatus");
    let fuel = document.getElementById("fuelStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("Entry missing, re submit!");    
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
        alert("Please check your entry and try again.");  
    }else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch!`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch!`;
        let launchStatus = document.getElementById("launchStatus");
        if(fuelLevel < 10000 && cargoLevel <= 10000){
            fuel.innerHTML = "Fuel level too low."
            cargo.innerHTML = "Cargo weight meets launch requirement."
            launchStatus.innerHTML = "Shuttle does not meet launch requirements."
            launchStatus.style.color = "#C7254E";
        }else if(fuelLevel >= 10000 && cargoLevel > 10000){
            fuel.innerHTML = "Fuel meets launch requirement!"
            cargo.innerHTML = "Cargo too heavy to launch."
            launchStatus.innerHTML = "Shuttle does not meet launch requirements."
            launchStatus.style.color = "#C7254E";
        }else if(fuelLevel < 10000 && cargoLevel > 10000){
            fuel.innerHTML = "Fuel level too low."
            cargo.innerHTML = "Cargo too heavy to launch."
            launchStatus.innerHTML = "Shuttle does not meet launch requirements."
            launchStatus.style.color = "#C7254E";
        }else {
            fuel.innerHTML = "Fuel meets launch requirement!"
            cargo.innerHTML = "Cargo weight ready for launch!"
            launchStatus.innerHTML = "Shuttle ready for launch!"
            launchStatus.style.color = "#419F6A";
        }

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        if (response.status >= 400) {
            throw new Error ("Bad response");
        }
        else {
            return response.json();
        }
    });


    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
