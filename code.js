/* Attributes */
const colorArray = ["red", "blue", "yellow", "purple"];
const x = document.getElementById("btn").addEventListener("click", pickColor);
const z = document.getElementById("container");


/* Methods */
function getRandom(){
    return Math.floor(Math.random()*colorArray.length);
}

function pickColor(){
    const rand = getRandom();
    z.style.backgroundColor= colorArray[rand]; 
}