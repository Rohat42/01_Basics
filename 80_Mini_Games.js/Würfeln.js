let nochmal = "j";
while (nochmal == "j") {
    prompt("Drücke Enter zum Würfeln");

    let spieler = Math.floor(Math.random() * 6) + 1;
    let computer = Math.floor(Math.random() * 6) + 1;

    console.log("Du hast :" + spieler);
    console.log(">Computer hat:" + computer);

    if (spieler > computer) {
        console.log("Du gewinnst!");
    } else if (spieler < computer) {
        console.log("Computer gewinnt");
    } else {
        console.log("Unentschieden");
    }

    nochmal = prompt("Nochmal würfeln? (j/n)");
}