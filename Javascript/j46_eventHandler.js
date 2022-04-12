// ------------------------------------------
// --- Add eventListener to Single button ---
// ------------------------------------------

// const button = document.querySelector("button");
// button.addEventListener("click", function(event){    
//     console.log(`You Clicked on ${event.target}`);
// });




// ----------------------------------------------
// --- Add eventListener to a set of  buttons ---
// ----------------------------------------------

// const button = document.querySelectorAll("button");

// button.forEach(function(item) {
//     item.addEventListener("click", clickHandler);
// });

// function clickHandler(event){
//     // console.log(event);
//     console.log(event.target.id);
//     event.target.style.fontSize = "2rem";
//     event.target.style.color = "#fe4439";
// }





// ----------------------------------------------
// ----- Prevent from running Default event -----
// ----------------------------------------------

// const anchor = document.querySelector("#anchor");
// anchor.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log("This text logged only when you disable Default-Action.");
// });






// ----------------------------------------------
// --------- Other Mouse Event Types ------------
// ----------------------------------------------


// const button = document.querySelector("#btnId1");
// button.addEventListener("click", function(){
//     console.log("Click");
// });

// button.addEventListener("dblclick", function(){
//     console.log("Double Click");
// });

// button.addEventListener("mousedown", function(){
//     console.log("Mouse Pressed");
// });

// button.addEventListener("mouseup", function(){
//     console.log("Mouse Release!");
// });

// button.addEventListener("mouseleave", function(){
//     console.log("Mouse Leaved!");
// });

// button.addEventListener("mousemove", function(){
//     console1.log("Mouse Moved In!");
// });







// ----------------------------------------------
// ------------ Text Event Types ----------------
// ----------------------------------------------


const text = document.querySelector("input");
// text.addEventListener("keydown", function(){
//      console.log("You entered a character");
// });

// KEYDOWN
// text.addEventListener("keydown", function(event){
//     console.log(`keydown:  ${event.target.value}`);
//     const paragraphElement = document.querySelector("p");
//     paragraphElement.innerText = event.target.value;    
// });

// KEYUP
// text.addEventListener("keyup", function(event){
//     console.log(`keyup:  ${event.target.value}`);
//     const paragraphElement = document.querySelector("p");
//     paragraphElement.innerText = event.target.value;    
// });

// FOCUS ==> element got focus ==> Oposite of BLUR
// text.addEventListener("focus", function(event){
//     console.log(`Focus`);
//     const paragraphElement = document.querySelector("p");
//     paragraphElement.innerText = event.target.value;    
// });

// BLUR ==> element losses focus ==> Oposite of FOCUS
// text.addEventListener("blur", function(event){
//     console.log(`Blur`);
//     const paragraphElement = document.querySelector("p");
//     paragraphElement.innerText = event.target.value;    
// });

// CUT
// text.addEventListener("cut", function(event){
//     console.log(`Cutted value:  ${event.target.value}`);
//     const paragraphElement = document.querySelector("p");
//     paragraphElement.innerText = "Cutted value: "+ event.target.value;    
// });

// PASTE
// text.addEventListener("paste", function(event){
//     console.log(`Pateded value:  ${event.target.value}`);
//     const paragraphElement = document.querySelector("p");
//     paragraphElement.innerText = "Pasted value: " + event.target.value;    
// });


// KEYPRESS
// text.addEventListener("keypress", function(event){
//     const paragraphElement = document.querySelector("p");
//     paragraphElement.innerText = event.target.value;
//     console.log(`keypress:  ${event.target.value}`);
// });

// KEYCODE in KEYDOWN
const textFull = document.getElementById("input");
textFull.addEventListener("keydown", function(event){
    console.log(`keyCode of (${event.key}) is  ${event.keyCode}`);
});


// Different between KEYPRESS & KEYDOWN
// Control keys (Alt, Control, Escape, Functions, ...) only works with KEYDOWN
// text.addEventListener("keypress", function(event){
//     console.log(`key (keypress):  ${event.key}`);
// });
// text.addEventListener("keydown", function(event){
//     console.log(`key (keydown):  ${event.key}`);
// });
