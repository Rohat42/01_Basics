let zahl = Math.floor(Math.random() * 100) + 1;
let geraten = 0;

while (geraten !== zahl) {
    geraten = Number(prompt("Rate eine Zahl zwischen 1 und 100"));

if (geraten > zahl) {
    console.log("Zu hoch");
} else if (geraten < zahl) {
    console.log("Zu niedrig");
} else {
    console.log("Genau richtig");
}
}
