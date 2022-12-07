// Write your JavaScript code here!

const { pickPlanet } = require("./scriptHelper");



window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })

   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   let form = document.querySelector("form");

  
    formElement.addEventListener("submit", function (event){
            event.preventDefault();

            let pilotSubmission = document.querySelector("input[name=pilotName]");
            let pilot = pilotSubmission.value;

            let copilotSubmission = document.querySelector("input[name=copilotName]");
            let copilot = copilotSubmission.value;

            let fuelLevelSubmission = document.querySelector("input[name=fuelLevel");
            let fuelLevel = Number(fuelLevelSubmission.value);

            let cargoLevelSubmission = document.querySelector("input[name=cargoMass]")
            let cargoLevel = Number(cargoLevelSubmission.value);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

   });
});