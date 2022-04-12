if (true){
    var xDefinedByVar = 20;
    let xDefinedByLet = 20;
    const xDefinedByConst = 20;
    console.log(`x defined by var IN if statement: ${xDefinedByVar}`);
    console.log(`x defined by let IN if statement: ${xDefinedByLet}`);
    console.log(`x defined by const IN if statement: ${xDefinedByConst}`);
}

console.log(`x defined by var OUT if statement: ${xDefinedByVar}`);
console.log(`x defined by let OUT if statement: ${xDefinedByLet}`);
console.log(`x defined by const OUT if statement: ${xDefinedByConst}`);