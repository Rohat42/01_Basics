let a = 3;
let b = 6;

let sum = 0;
let start, end;

if (a < b) {
start = a;
end = b; 
}else{
start = b;
end = a;
}

console.log("Start:", start);
console.log("End.", end );


for (let i = start; i<= end ; i++){
sum = sum + i;
}

console.log("Summe:", sum );