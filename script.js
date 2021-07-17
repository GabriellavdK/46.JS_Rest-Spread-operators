// Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
// De functie accepteert meerdere argumenten
// Gebruik de rest parameter om ervoor te zorgen dat je functie alle argumenten als een array behandelt.

let sumUp = (...numbers) => numbers.reduce((prev, current) => prev + current);

console.log(sumUp(1, 5, 6, 8, 3, 2, 4, 9, 64));

// Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
// De functie accepteert 1 argument, namelijk een array van cijfers
// Gebruik de spread operator om ervoor te zorgen dat je functie alle items in de array bij elkaar optelt.

let sumUp2 = (num1, num2, num3) => num1 + num2 + num3;

const num = [1, 5, 56];
console.log(sumUp2(...num));
