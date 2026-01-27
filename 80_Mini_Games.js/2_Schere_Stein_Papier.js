let nochmal = "j";
while (nochmal == "j") {
    let spieler = prompt("Schreibe: Schere, Stein oder Papier");
    let optionen = ["Schere", "Stein", "Papier"];
    let computer = optionen[Math.floor(Math.random() * 3)];

console.log("Du hast: " + spieler);
console.log("Computer hat: " + computer);

if (spieler == computer) {
    console.log("Unentschieden!");

    if (spieler == "Schere" && computer == "Papier" ||
        spieler == "Stein" && computer == "Schere" ||
        spieler == "Papier" && computer == "Stein") {
        console.log("Du gewinnst!");
    } else {
        console.log("Computer gewinnt!");
    }

    nochmal = prompt("Möchtest du nochmal spielen? (j/n)");
}
}
