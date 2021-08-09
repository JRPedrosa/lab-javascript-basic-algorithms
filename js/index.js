// Iteration 1: Names and Input

const hacker1 = "Joao";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "An@";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

let capitalNameWithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
    capitalNameWithSpaces = capitalNameWithSpaces + `${hacker1.toUpperCase()[i]} `
}
removeLastSpace = capitalNameWithSpaces.slice(0, -1);
console.log(removeLastSpace);


let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse = hacker2Reverse + hacker2[i];
}
console.log(hacker2Reverse);


if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}


