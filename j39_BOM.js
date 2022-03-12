// ----------------------------------------------------------
// ---------------- Browser Object Model --------------------
// ----------------------- (BOM) ----------------------------

console.log(`Inner Height:  ${window.innerHeight}`);
console.log(`Outer Height:  ${window.outerHeight}`);
console.log(`Inner Width:  ${window.innerWidth}`);
console.log(`Outer Width:  ${window.outerWidth}`);
// window.open("https://botostart.ir");

// ------------------ Screen ----------------------------------
console.log(window);
console.log(`Screen Width   ("window.screen.width"):   ${window.screen.width}`);
console.log(`Screen Heigth  ("window.screen.width"):   ${window.screen.height}`);
console.log(`Screen Width   ("screen.width"):  ${screen.width}`);
console.log(`Screen Width   ("screen.heigth"):  ${screen.height}`);
console.log(`Color Depth:    ${screen.colorDepth}`);
console.log(`Pixel Depth:    ${screen.pixelDepth}`);

// ----------------- Location ----------------------------------
console.log(location);
// location.href = "https://infohr.bki.ir"


// ------------------ History ----------------------------------
console.log(`History.Length:  ${history.length}`);
history.back();
history.forward();