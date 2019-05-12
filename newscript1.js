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
            openModalBike();

        })
    })
}
// SHow modal on click of vehicle

function openModalBike(){
    console.log("open modal started");
    const modalBike = document.querySelector("#_ModalBike_");
    const modalTrain = document.querySelector("#_ModalTrain_");

    modalBike.classList.remove("hide");
    modalMotorcycle.classList.remove("hide");
    modalTrain.classList.remove("hide");

    // stop the vehicle
  }
function openModalHorse(){
    const modalHorse = document.querySelector("#_ModalHorse_");
    modalHorse.classList.remove("hide");
}
function openModalCar(){
    console.log("OPEN CAR");
    const modalCar = document.querySelector("#_ModalCar_");
    modalCar.classList.remove("hide");
}
function openModalOldbus(){
    console.log("OPEN BUS");
    const modalOldbus = document.querySelector("#_ModalOldbus_");
    modalOldbus.classList.remove("hide");
}
function openModalPublicBus(){
    const modalModernBus = document.querySelector("#_ModalPublicBus_");
    modalModernBus.classList.remove("hide");
}
function openModalMotorcycle(){
    const modalMotorcycle = document.querySelector("#_ModalMotorcycle_");
    modalMotorcycle.classList.remove("hide");  
}
function openModalTesla(){
    const modalTesla = document.querySelector("#_ModalTesla_");
    modalTesla.classList.remove("hide");
}
// Close modal on click "close"

function closeModalBike(){
    const modalBike = document.querySelector("#_ModalBike_");
      modalBike.classList.add("hide");
  }
function closeModalHorse(){
    const modalHorse = document.querySelector("#_ModalHorse_");
    modalHorse.classList.add("hide");
}
function closeModalCar(){
    const modalCar = document.querySelector("#_ModalCar_");
    modalCar.classList.add("hide");
}
function closeModalOldbus(){
    const modalOldbus = document.querySelector("#_ModalOldbus_");
    modalOldbus.classList.add("hide");;
}
function closeModalPublicBus(){
    const modalModernBus = document.querySelector("#_ModalPublicBus_");
    modalModernBus.classList.add("hide");
}
function closeModalMotorcycle(){
    const modalMotorcycle = document.querySelector("#_ModalMotorcycle_");
    modalMotorcycle.classList.add("hide");  
}
function closeModalTesla(){
    const modalTesla = document.querySelector("#_ModalTesla_");
    modalTesla.classList.add("hide");
}

function loadSVG() {
    console.log("load the SVG");

    fetch("timeline-test6_Mockup.svg")
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
    modernPlane = document.querySelector("#Modern_Airplane");
    tesla = document.querySelector("#Tesla");

    // find the marker point inside svg
 //   const bikeMarkerpos = document.querySelector("#_timelineMarker2_").x1.baseVal.value;
 //   console.log(bikeMarkerpos);

    // grab the close button
    const closeBtnBike = document.querySelector("#closeBtnBike");
    const closeBtnHorse = document.querySelector("#closeBtnHorse");
    const closeBtnOldBus = document.querySelector("#closeBtnOldBus");
    const closeBtnCar = document.querySelector("#closeBtnCar");
    const closeBtnPublicBus = document.querySelector("#closeBtnPublicBus");
    const closeBtnMotorcycle = document.querySelector("#closeBtnMotorcycle");
    const closeBtnTesla = document.querySelector("#closeBtnTesla");
 //   const closeBtnTrain = document.querySelector("#closeBtnBike");
 //   const closeBtnAirplane = document.querySelector("#closeBtnAirplane");
 //   const closeBtnModernPlane = document.querySelector("#closeBtnModernPlane");

    // and the curve
    curve = document.querySelector("#timeline line");
    console.log(curve);
  
    //  Start the animation
   //    runAnimationBike();
   //    runAnimationHorse();
   //    runAnimationOldbus();
   //    runAnimationCar();
   //    runAnimationModernBus();
   //    runAnimationMotorcycle();
   //    runAnimationModernAirplane();
   let currentPositionTesla = 7599.5;
   const teslaMarkerpos = 9000;
   let modalTesla = document.querySelector("#_ModalTesla_");

       runAnimation(currentPositionTesla, teslaMarkerpos, tesla);

    // make vehicles clickable for modal
    bike.addEventListener("click", openModalBike);
    closeBtnBike.addEventListener("click", closeModalBike)
    
    horse.addEventListener("click", openModalHorse);
    closeBtnHorse.addEventListener("click", closeModalHorse);
   
    oldBus.addEventListener("click", openModalOldbus);
    closeBtnOldBus.addEventListener("click", closeModalOldbus);
    
    car.addEventListener("click", openModalCar);
    closeBtnCar.addEventListener("click", closeModalCar);
    
    modernBus.addEventListener("click", openModalPublicBus);
    closeBtnPublicBus.addEventListener("click", closeModalPublicBus);
    
    motorcycle.addEventListener("click", openModalMotorcycle);
    closeBtnMotorcycle.addEventListener("click", closeModalMotorcycle);
    
    tesla.addEventListener("click", openModalTesla);
    closeBtnTesla.addEventListener("click", closeModalTesla);

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
const speed = 1;
let currentPositionHorse = 0;
let currentPositionBike = 948.5;
let currentPositionOldbus = 1899.5;
let currentPositionCar = 2849.5;
let currentPositionModernBus = 3798.5;
let currentPositionMotorcycle = 4749.5;
let currentPositionModernAirplane = 4749.5;
let currentPositionAirplane;


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
    pos.y = pos.y - ( horse.getBBox().height/ 1.05);
    document.querySelector("#Horse").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalHorse_").style.transform = `translate(${pos.x}px, 160px)`;

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
    pos.y = pos.y - ( bike.getBBox().height);
    document.querySelector("#bike").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalBike_").style.transform = `translate(${pos.x}px, 160px)`;
    
/*     const stopBtn = document.querySelector("#stopBtn");

    stopBtn.addEventListener("click", cancelAnimation);
    function cancelAnimation(){
        console.log("cancelling")
            cancelAnimationFrame(runAnimationBike);
    } */
}

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
    pos.y = pos.y - ( oldBus.getBBox().height);
    document.querySelector("#oldbus").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalOldbus_").style.transform = `translate(${pos.x}px, 160px)`;

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
    pos.y = pos.y - ( oldBus.getBBox().height/ 1.3);
    document.querySelector("#Car").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalCar_").style.transform = `translate(${pos.x}px, 160px)`;

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
    pos.y = pos.y - (oldBus.getBBox().height/ 1.2);
    document.querySelector("#Modern_Bus").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalPublicBus_").style.transform = `translate(${pos.x}px, 160px)`;

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
    pos.y = pos.y - ( motorcycle.getBBox().height);
    document.querySelector("#Motorcycle").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalMotorcycle_").style.transform = `translate(${pos.x}px, 160px)`;

}

function runAnimationModernAirplane(){
    console.log("fly the modern plane");
    const modernPlaneMarkerpos = 5698.5;

     if(currentPositionModernAirplane < modernPlaneMarkerpos ){  
        requestAnimationFrame(runAnimationModernAirplane);
    } 
    currentPositionModernAirplane += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionModernAirplane);
    console.log(pos);

    pos.x = pos.x - ( modernPlane.getBBox().width / 2);
    pos.y = pos.y - ( modernPlane.getBBox().height);
    document.querySelector("#Modern_Airplane").style.transform = `translate(${pos.x}px, 0px)`;
    document.querySelector("#_ModalModernPlane_").style.transform = `translate(${pos.x}px, 160px)`;

}

/* function runAnimationTesla(){
    console.log("drive stupid tesla");

     if(currentPositionTesla < teslaMarkerpos ){  
        requestAnimationFrame(runAnimationTesla);
    } 
    currentPositionTesla += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionTesla);
    console.log(pos);

    pos.x = pos.x - ( tesla.getBBox().width / 2);
    pos.y = pos.y - ( tesla.getBBox().height);

//    document.querySelector("#Tesla").style.transform = `rotate(-15deg)`;
    document.querySelector("#Tesla").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalTesla_").style.transform = `translate(${pos.x}px, 160px)`;

} */

// write a reusable runAnimation function here:
 function runAnimation(param1, param2, param3){
   if(param1 < param2){
       requestAnimationFrame(runAnimation);
   }
   param1 += speed;
    runTransform(param1);
}

function runTransform(param1){
    const teslaPos = curve.getPointAtLength(param1);

    teslaPos.x = teslaPos.x - (tesla.getBBox().width / 2);
    teslaPos.y = teslaPos.y - (tesla.getBBox().height / 2);
    document.querySelector("#Tesla").style.transform = `translate(${teslaPos.x}px, ${teslaPos.y}px )`;
    document.querySelector("#_ModalTesla_").style.transform = `translate(${teslaPos.x}px, 160px)`;
}