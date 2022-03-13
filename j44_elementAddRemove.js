const element = document.createElement("a");

//-------------------------------------------------
//--------------  Set element attributes ----------
//-------------------------------------------------
element.id = "newAnchor";
//element.setAttribute("id", "anchor");

element.setAttribute("className", "class1 class2");
//element.className = "class1 class2";

//element.href = "https://bki.ir";
element.setAttribute("href", "https://bki.ir");

element.setAttribute("data-List", "[1, 2, 3]");
element.innerText = "Agricultural Bank of Iran";
element.target = "_blank";
element.style.color = "#0f88ee";


//-------------------------------------------------
//--------------  Set element PARENT --------------
//-------------------------------------------------

const parentElement = document.querySelector(".container");
//const elementParent = document.getElementsByClassName("container");

parentElement.appendChild(element);


//-------------------------------------------------
//--------------  Replace an Element --------------
//-------------------------------------------------
const oldElement = document.querySelector("#oldAnchor");

parentElement.replaceChild(element, oldElement);
// with this command, oldElement exists in HTML document
// but we can set it's display to off


//-------------------------------------------------
//--------------  Remove an Element --------------
//-------------------------------------------------
oldElement.remove();
// with this command, oldElement no longer exists in HTML document