window.onload = function () {

    function rechnen(zeichen) {

        let zahl1 = parseFloat(document.getElementById("value1").value);
        let zahl2 = parseFloat(document.getElementById("value2").value);

        if (isNaN(zahl1) || isNaN(zahl2)) {

            alert("Bitte Zahlen eingeben");
            return;
        }

        let ergebnis;

        if (zeichen == "+") {
            ergebnis = zahl1 + zahl2;
        }

        if (zeichen == "-") {
            ergebnis = zahl1 - zahl2;
        }

        if (zeichen == "*") {
            ergebnis = zahl1 * zahl2;
        }

        if (zeichen == "/") {
            ergebnis = zahl1 / zahl2;
        }

        document.getElementById("result").textContent = ergebnis;
    }

    document.getElementById("add").addEventListener("click", function () {
        rechnen("+");
    });

    document.getElementById("sub").addEventListener("click", function () {
        rechnen("-");
    });

    document.getElementById("mul").addEventListener("click", function () {
        rechnen("*");
    });

    document.getElementById("div").addEventListener("click", function () {
        rechnen("/");
    });

}