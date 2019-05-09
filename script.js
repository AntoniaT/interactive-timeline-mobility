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

    fetch("timeline-test3_Mockup.svg")
    .then( response => response.text() )
    .then( svgData => {
        console.log("SVG loaded");
    
    // put the SVG into the DOM
    document.querySelector("#thesvg").insertAdjacentHTML("afterbegin", svgData);

    // grab the bike
    bike = document.querySelector("#bike");

    // grab the close button
    const closeBtn = document.querySelector("#closeBtn");

    // and the curve
    curve = document.querySelector("#timeline path");
    console.log(curve);
  
    //  Start the animation
    currentPosition = 0;

       runAnimation();
    // make bike clickable for modal
    bike.addEventListener("click", loadJSON);
    closeBtn.addEventListener("click", closeModal)

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

let xpos = 20;
const speed = 2.5;

let currentPosition = 0;

function runAnimation(){
    console.log("animate");

     if(currentPosition < 3600 ){
        requestAnimationFrame(runAnimation);
    } 
    currentPosition += speed;
// find the current position
const pos = curve.getPointAtLength(currentPosition);
console.log(pos);

pos.x = pos.x - ( bike.getBBox().width / 2) - 1400;
pos.y = pos.y - ( bike.getBBox().height / 2) -840;

//if( pos.x > 1300){
//    cancelAnimationFrame(runAnimation);
//}

document.querySelector("#bike").style.transform = `translate(${pos.x}px, ${pos.y}px )`;

}
