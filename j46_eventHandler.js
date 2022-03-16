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

// copy input value to a paragraph
text.addEventListener("keydown", function(event){
    const paragraphElement = document.querySelector("p");
    paragraphElement.innerText = event.target.value;
});