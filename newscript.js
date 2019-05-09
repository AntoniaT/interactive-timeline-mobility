window.addEventListener("DOMContentLoaded", loadSVG);

let parent = document.querySelector("#thesvg");

function loadJSON(){
    fetch("data.json")
    .then( response => response.json())
    .then (myJSON => {
        console.log("JSON is loaded");
        myJSON.forEach ( obj =>{
            console.log(obj);
            // clone the template
            let template = document.querySelector("#vehicle-data-template");
            let clone = template.cloneNode(true).content;

            // put the data in the clone

            clone.querySelector("[data-field=title]").textContent = obj.title;
         //   clone.querySelector("[data-field=year]").src = obj.image + ".jpg";
            clone.querySelector("[data-field=co2]").textContent = obj.year;
            clone.querySelector("[data-field=co2]").textContent = obj.co2;
            clone.querySelector("[data-field=population]").textContent = obj.population;
            clone.querySelector("[data-field=image]").textContent = obj.image;

            // append the clone to ...
            document
            .querySelector("[data-svgplaceholder='" + obj.id + "']")
            .appendChild(clone);
            console.log("clicked!");
            openModal();
        })
    })
}
// SHow modal on click of vehicle

function openModal(){
    console.log("open modal started");
    const modal = document.querySelector("#Modal_Mockup");
    modal.classList.remove("hide");
    // stop the vehicle
  }
// Close modal on click "close"

  function closeModal(){
    const modal = document.querySelector("#Modal_Mockup");

      console.log("closed modal");
      modal.classList.add("hide");
  }

function loadSVG() {
    console.log("load the SVG");

    fetch("timeline-test5_Mockup.svg")
    .then( response => response.text() )
    .then( svgData => {
        console.log("SVG loaded");
    
    // put the SVG into the DOM
    document.querySelector("#thesvg").insertAdjacentHTML("afterbegin", svgData);

    // grab all the vehicles
    bike = document.querySelector("#bike");
    horse = document.querySelector("#Horse");
    oldBus = document.querySelector("#oldbus");
    car = document.querySelector("#Car");
    modernBus = document.querySelector("#Modern_Bus");
    motorcycle = document.querySelector("#Motorcycle");
    tesla = document.querySelector("#Tesla");

    // find the marker point inside svg
 //   const bikeMarkerpos = document.querySelector("#_timelineMarker2_").x1.baseVal.value;
 //   console.log(bikeMarkerpos);

    // grab the close button
    const closeBtn = document.querySelector("#closeBtn");

    // and the curve
    curve = document.querySelector("#timeline path");
    console.log(curve);
  
    //  Start the animation
       runAnimationBike();
       runAnimationHorse();
       runAnimationOldbus();
       runAnimationCar();
       runAnimationModernBus();
       runAnimationMotorcycle();
       runAnimationTesla();

    // make bike clickable for modal
    bike.addEventListener("click", loadJSON);
 //   closeBtn.addEventListener("click", closeModal)

// trying to inject json Data into the modal
//    const svgplaceholders = document.querySelectorAll(".svgplaceholder");

//    svgplaceholders.forEach(replaceSVGwithHTML);
  //  calulateSizes();

    })
}

/* function replaceSVGwithHTML(htmlElement) {
    //we got an HTMLelement with svg-svgplaceholder
    //We need to find matching SVG element
    //console.log(svgPlaceholder);
    const svgId = htmlElement.dataset.svgplaceholder;
    const svgSelector = "#" + svgId + " .HTML_placeholder";
    console.log(svgId);
    console.log(htmlElement);
    console.log(svgSelector);
    const svgElement = document.querySelector(svgSelector);
   // fitRetangule(svgElement, htmlElement);
  } */


let bike = null;
let curve = null;
const speed = 2;
let currentPositionHorse = 0;
let currentPositionBike = 948.5;
let currentPositionOldbus = 1899.5;
let currentPositionCar = 2849.5;
let currentPositionModernBus = 3798.5;
let currentPositionMotorcycle = 4749.5;
let currentPositionTesla = 5698.5;



function runAnimationHorse(){
    console.log("move the horse");
    const horseMarkerpos = 948.5;

     if(currentPositionHorse < horseMarkerpos ){  
        requestAnimationFrame(runAnimationHorse);
    } 
    currentPositionHorse += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionHorse);
    console.log(pos);

    pos.x = pos.x - ( horse.getBBox().width / 2);
    pos.y = pos.y - ( horse.getBBox().height / 2);
    document.querySelector("#Horse").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
}
function runAnimationBike(){
    console.log("animate");
    const bikeMarkerpos = document.querySelector("#_timelineMarker3_").x1.baseVal.value;

     if(currentPositionBike < bikeMarkerpos ){  
        requestAnimationFrame(runAnimationBike);
    } 
    currentPositionBike += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionBike);
    console.log(pos);

    pos.x = pos.x - ( bike.getBBox().width / 2);
    pos.y = pos.y - ( bike.getBBox().height / 2);
    document.querySelector("#bike").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
}
/* bike.addEventListener("mouseover", cancelAnimation);
function cancelAnimation(){
        cancelAnimationFrame(runAnimationBike);
} */

function runAnimationOldbus(){
    console.log("move the bus man");
    const oldBusMarkerpos = 2849.5;

     if(currentPositionOldbus < oldBusMarkerpos ){  
        requestAnimationFrame(runAnimationOldbus);
    } 
    currentPositionOldbus += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionOldbus);
    console.log(pos);

    pos.x = pos.x - ( oldBus.getBBox().width / 2);
    pos.y = pos.y - ( oldBus.getBBox().height / 2);
    document.querySelector("#oldbus").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
}
function runAnimationCar(){
    console.log("drive the car");
    const carMarkerpos = 3798.5;

     if(currentPositionCar < carMarkerpos ){  
        requestAnimationFrame(runAnimationCar);
    } 
    currentPositionCar += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionCar);
    console.log(pos);

    pos.x = pos.x - ( oldBus.getBBox().width / 2);
    pos.y = pos.y - ( oldBus.getBBox().height / 2);
    document.querySelector("#Car").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
}
function runAnimationModernBus(){
    console.log("follow the modern bus please");
    const modernBusMarkerpos = 4749.5;

     if(currentPositionModernBus < modernBusMarkerpos ){  
        requestAnimationFrame(runAnimationModernBus);
    } 
    currentPositionModernBus += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionModernBus);
    console.log(pos);

    pos.x = pos.x - ( oldBus.getBBox().width / 2);
    pos.y = pos.y - (oldBus.getBBox().height);
    document.querySelector("#Modern_Bus").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
}

function runAnimationMotorcycle(){
    console.log("drive damn motorcycle");
    const motorcycleMarkerpos = 5698.5;

     if(currentPositionMotorcycle < motorcycleMarkerpos ){  
        requestAnimationFrame(runAnimationMotorcycle);
    } 
    currentPositionMotorcycle += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionMotorcycle);
    console.log(pos);

    pos.x = pos.x - ( motorcycle.getBBox().width / 2);
    pos.y = pos.y - ( motorcycle.getBBox().height / 2);
    document.querySelector("#Motorcycle").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
}

function runAnimationTesla(){
    console.log("drive stupid tesla");
    const teslaMarkerpos = 6649.5;

     if(currentPositionTesla < teslaMarkerpos ){  
        requestAnimationFrame(runAnimationTesla);
    } 
    currentPositionTesla += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionTesla);
    console.log(pos);

    pos.x = pos.x - ( tesla.getBBox().width / 2);
    pos.y = pos.y - ( tesla.getBBox().height / 2);
    document.querySelector("#Tesla").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
}

// write a reusable runAnimation function here:

/* function runAnimation(param1, param2, param3, params4){
   if(params1 < params2){
       requestAnimationFrame(params3);
   }
   params1 += speed;
   const pos = curve.getPointAtLength(params1);

    pos.x = pos.x - ( params4.getBBox().width / 2);
    pos.y = pos.y - ( params4.getBBox().height / 2);
    params4.style.transform = `translate(${pos.x}px, ${pos.y}px )`;
}*/