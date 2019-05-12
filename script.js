window.addEventListener("DOMContentLoaded", loadSVG);

let parent = document.querySelector("#thesvg");

// load the svg
function loadSVG() {
    console.log("load the SVG");

    fetch("timeline-Mockup.svg")
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
    oldPlane = document.querySelector("#Airplane");
    motorcycle = document.querySelector("#Motorcycle");
    modernPlane = document.querySelector("#Modern_Airplane");
    tesla = document.querySelector("#Tesla");
    train = document.querySelector("#Train");

    // and the timeline
    curve = document.querySelector("#timeline line");
    console.log(curve);

  // grab the close buttons in the modal
  const closeBtnBike = document.querySelector("#closeBtnBike");
  const closeBtnHorse = document.querySelector("#closeBtnHorse");
  const closeBtnOldBus = document.querySelector("#closeBtnOldBus");
  const closeBtnCar = document.querySelector("#closeBtnCar");
  const closeBtnPublicBus = document.querySelector("#closeBtnPublicBus");
  const closeBtnMotorcycle = document.querySelector("#closeBtnMotorcycle");
  const closeBtnTesla = document.querySelector("#closeBtnTesla");
  const closeBtnTrain = document.querySelector("#closeBtnTrain");
  const closeBtnAirplane = document.querySelector("#closeBtnAirplane");
  const closeBtnModernPlane = document.querySelector("#closeBtnModernPlane");

    //  Start the animations
       runAnimationBike();
       runAnimationHorse();
       runAnimationOldbus();
       runAnimationOldPlane();
       runAnimationCar();
       runAnimationModernBus();
       runAnimationMotorcycle();
       runAnimationModernAirplane();
       runAnimationTesla();
       runAnimationTrain();

    // make vehicles clickable for modal
    bike.addEventListener("click", openModalBike);
    closeBtnBike.addEventListener("click", closeModalBike)
    
    horse.addEventListener("click", openModalHorse);
    closeBtnHorse.addEventListener("click", closeModalHorse);
   
    oldBus.addEventListener("click", openModalOldbus);
    closeBtnOldBus.addEventListener("click", closeModalOldbus);
    
    oldPlane.addEventListener("click", openModalOldPlane);
    closeBtnAirplane.addEventListener("click", closeModalOldPlane);

    modernPlane.addEventListener("click", openModalModernPlane);
    closeBtnModernPlane.addEventListener("click", closeModalModernPlane);

    car.addEventListener("click", openModalCar);
    closeBtnCar.addEventListener("click", closeModalCar);
    
    modernBus.addEventListener("click", openModalPublicBus);
    closeBtnPublicBus.addEventListener("click", closeModalPublicBus);
    
    motorcycle.addEventListener("click", openModalMotorcycle);
    closeBtnMotorcycle.addEventListener("click", closeModalMotorcycle);

    train.addEventListener("click", openModalTrain);
    closeBtnTrain.addEventListener("click", closeModalTrain);

    tesla.addEventListener("click", openModalTesla);
    closeBtnTesla.addEventListener("click", closeModalTesla);
   
})
    
}

// Show modal on click of vehicle

function openModalBike(){
    console.log("open modal started");
    const modalBike = document.querySelector("#_ModalBike_");
    modalBike.classList.remove("hide");
  }
function openModalHorse(){
    const modalHorse = document.querySelector("#_ModalHorse_");
    modalHorse.classList.remove("hide");
}
function openModalCar(){
    const modalCar = document.querySelector("#_ModalCar_");
    modalCar.classList.remove("hide");
}
function openModalOldbus(){
    const modalOldbus = document.querySelector("#_ModalOldbus_");
    modalOldbus.classList.remove("hide");
}
function openModalOldPlane(){
    const modalOldPlane = document.querySelector("#_ModalAirplane_");
    modalOldPlane.classList.remove("hide");
}
function openModalModernPlane(){
    const modalModernPlane = document.querySelector("#_ModalModernPlane_");
    modalModernPlane.classList.remove("hide");
}

function openModalPublicBus(){
    const modalModernBus = document.querySelector("#_ModalPublicBus_");
    modalModernBus.classList.remove("hide");
}
function openModalMotorcycle(){
    const modalMotorcycle = document.querySelector("#_ModalMotorcycle_");
    modalMotorcycle.classList.remove("hide");  
}
function openModalTrain(){
    const modalTrain = document.querySelector("#_ModalTrain_");
    modalTrain.classList.remove("hide");
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
function closeModalOldPlane(){
    const modalOldPlane = document.querySelector("#_ModalAirplane_");
    modalOldPlane.classList.add("hide"); 
}
function closeModalModernPlane(){
    const modalModernPlane = document.querySelector("#_ModalModernPlane_");
    modalModernPlane.classList.add("hide");
}
function closeModalTrain(){
    const modalTrain = document.querySelector("#_ModalTrain_");
    modalTrain.classList.add("hide");
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

// set all variables for the right ending positions of the vehicles

let bike = null;
let curve = null;
let speed = 1;
let currentPositionHorse = 0;
let currentPositionBike = 948.5;
let currentPositionOldPlane = 1700;
let currentPositionMotorcycle = 1899.5;
let currentPositionOldbus = 2150;
let currentPositionCar = 4500;
let currentPositionModernBus = 2849.5;
let currentPositionModernAirplane = 3000;
let currentPositionTrain = 5698.5;
let currentPositionTesla = 7599.5;



function runAnimationHorse(){
    const horseMarkerpos = 948.5;

     if(currentPositionHorse < horseMarkerpos ){  
        requestAnimationFrame(runAnimationHorse);
    } 
    currentPositionHorse += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionHorse);

    pos.x = pos.x - ( horse.getBBox().width / 2);
    pos.y = pos.y - ( horse.getBBox().height/ 1.05);
    document.querySelector("#Horse").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalHorse_").style.transform = `translate(${pos.x}px, 160px)`;

}
function runAnimationBike(){
    const bikeMarkerpos = document.querySelector("#_timelineMarker3_").x1.baseVal.value;

     if(currentPositionBike < bikeMarkerpos ){  
        requestAnimationFrame(runAnimationBike);
    } 
    currentPositionBike += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionBike);

    pos.x = pos.x - ( bike.getBBox().width / 2);
    pos.y = pos.y - ( bike.getBBox().height);
    document.querySelector("#bike").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalBike_").style.transform = `translate(${pos.x}px, 160px)`;
    
}

function runAnimationOldbus(){
    const oldBusMarkerpos = document.querySelector("#_timelineMarker5_").x1.baseVal.value;

     if(currentPositionOldbus < oldBusMarkerpos ){  
        requestAnimationFrame(runAnimationOldbus);
    } 
    currentPositionOldbus += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionOldbus);

    pos.x = pos.x - ( oldBus.getBBox().width / 2);
    pos.y = pos.y - ( oldBus.getBBox().height);
    document.querySelector("#oldbus").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalOldbus_").style.transform = `translate(${pos.x}px, 160px)`;

}
function runAnimationCar(){
    const carMarkerpos = document.querySelector("#_timelineMarker7_").x1.baseVal.value;

     if(currentPositionCar < carMarkerpos ){  
        requestAnimationFrame(runAnimationCar);
    } 
    let speed = 2;
    currentPositionCar += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionCar);

    pos.x = pos.x - ( oldBus.getBBox().width / 2);
    pos.y = pos.y - ( oldBus.getBBox().height/ 1.3);
    document.querySelector("#Car").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalCar_").style.transform = `translate(${pos.x}px, 160px)`;

}
function runAnimationModernBus(){
    const modernBusMarkerpos = document.querySelector("#_timelineMarker6_").x1.baseVal.value;

     if(currentPositionModernBus < modernBusMarkerpos ){  
        requestAnimationFrame(runAnimationModernBus);
    } 
    let speed = 2;
    currentPositionModernBus += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionModernBus);

    pos.x = pos.x - ( oldBus.getBBox().width / 2);
    pos.y = pos.y - (oldBus.getBBox().height/ 1.2);
    document.querySelector("#Modern_Bus").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalPublicBus_").style.transform = `translate(${pos.x}px, 160px)`;

}

function runAnimationMotorcycle(){
    const motorcycleMarkerpos = document.querySelector("#_timelineMarker4_").x1.baseVal.value;


     if(currentPositionMotorcycle < motorcycleMarkerpos ){  
        requestAnimationFrame(runAnimationMotorcycle);
    } 
    let speed = 2;
    currentPositionMotorcycle += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionMotorcycle);

    pos.x = pos.x - ( motorcycle.getBBox().width / 2);
    pos.y = pos.y - ( motorcycle.getBBox().height);
    document.querySelector("#Motorcycle").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalMotorcycle_").style.transform = `translate(${pos.x}px, 160px)`;

}

function runAnimationModernAirplane(){
    const modernPlaneMarkerpos = document.querySelector("#_timelineMarker6_").x1.baseVal.value;

     if(currentPositionModernAirplane < modernPlaneMarkerpos ){  
        requestAnimationFrame(runAnimationModernAirplane);
    } 
    let speed = 3.2;

    currentPositionModernAirplane += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionModernAirplane);

    pos.x = pos.x - ( modernPlane.getBBox().width / 2);
    pos.y = pos.y - ( modernPlane.getBBox().height);
    document.querySelector("#Modern_Airplane").style.transform = `translate(${pos.x}px, 70px)`;
    document.querySelector("#_ModalModernPlane_").style.transform = `translate(${pos.x}px, 160px)`;

}

function runAnimationTesla(){
    const teslaMarkerpos = 9000;

     if(currentPositionTesla < teslaMarkerpos ){  
        requestAnimationFrame(runAnimationTesla);
    } 
    let speed = 2.5;

    currentPositionTesla += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionTesla);

    pos.x = pos.x - ( tesla.getBBox().width / 2);
    pos.y = pos.y - ( tesla.getBBox().height);

    document.querySelector("#Tesla").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalTesla_").style.transform = `translate(${pos.x}px, 160px)`;

}
function runAnimationOldPlane(){
    const oldPlaneMarkerpos = 2849.5;

     if(currentPositionOldPlane < oldPlaneMarkerpos ){  
        requestAnimationFrame(runAnimationOldPlane);
    } 
    currentPositionOldPlane += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionOldPlane);

    pos.x = pos.x - ( oldPlane.getBBox().width / 2);
    pos.y = pos.y - ( oldPlane.getBBox().height);

    document.querySelector("#Airplane").style.transform = `translate(${pos.x}px, 50px)`;
    document.querySelector("#_ModalAirplane_").style.transform = `translate(${pos.x}px, 160px)`;

}

function runAnimationTrain(){
    const trainMarkerpos = 7700;

     if(currentPositionTrain < trainMarkerpos ){  
        requestAnimationFrame(runAnimationTrain);
    } 
    let speed = 3.8;

    currentPositionTrain += speed;
   // find the current position
    const pos = curve.getPointAtLength(currentPositionTrain);

    pos.x = pos.x - ( tesla.getBBox().width / 2);
    pos.y = pos.y - ( tesla.getBBox().height);

    document.querySelector("#Train").style.transform = `translate(${pos.x}px, ${pos.y}px )`;
    document.querySelector("#_ModalTrain_").style.transform = `translate(${pos.x}px, 160px)`;

}
// write a reusable runAnimation function here:
// doesn't work because I have to select the svg element in the same function --maybe try again later

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