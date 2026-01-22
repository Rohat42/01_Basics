let zahlen = []
for (let i = 0; i < 7; i++) {
    zahlen.push(Math.floor(Math.random() * 10));
}

let summe = 0;
for (let i = 0; i < zahlen.length; i++) {
    summe += zahlen[i];
}

console.log(summe);



