let zahlen = [4, 9, 2, 7, 5]

let größte = zahlen[0];

for (let i = 0; i < zahlen.length; i++) {
    if (zahlen[i] > größte) {

        größte = zahlen[i];
    }
}
console.log(größte); 