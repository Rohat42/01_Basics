let a = Math.floor(Math.random() * 100);

console.log(a);

// a > 10 größer
// a < 10 kleiner
// a == 7

// a >= 10 größer gleich
// a <= 10 kleiner gleich

if (a >= 80) {
    // Blockklammern
    console.log("Die Zahl ist groß");
} else if (a >= 40) {
    console.log("Die Zahl ist positiv aber klein");
} else {
    console.log("Die Zahl ist klein");
}