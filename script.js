//color change using dom
const ourHeaderDom = document.getElementById("ourHeader");
ourHeaderDom.style.color = "red";
 

//EventListener click
let string = "";
let buttons = document.querySelectorAll('.buttons');
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '='){
            string = eval(string);
            document.querySelector('input').value = string;
        } else if(e.target.innerHTML== 'C'){
            string = "";
            document.querySelector('input').value = string;
        } else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;}

    })
})


//creating elements after clicking button
function creatingElement(){
    const newHeaderElement = document.createElement("h1");
    newHeaderElement.innerText = "Thanks for using my app.......";
    newHeaderElement.style.color = "purple";
    ourHeaderDom.appendChild(newHeaderElement);
}


//eventListner property
function onMouseHandler(){
    console.log("Heppening");
    ourHeaderDom.style.color = "purple";
    ourHeaderDom.innerText = "Welcome to my calculator app";

}


//fetching data
document.addEventListener("DOMContentLoaded", function() {
    const getCatButton = document.getElementById("clickButton");
    const catImage = document.getElementById("catImage");

    getCatButton.addEventListener("click", async function() {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            const data = await response.json();
            displayCatPhoto(data[0].url);
        } catch (error) {
            console.error("Error fetching cat photo:", error);
        }
    });

    function displayCatPhoto(photoUrl) {
        catImage.src = photoUrl;
    }
});




