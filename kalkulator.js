const kalkulator = (x,y,operator) => {
    let hasil;

    switch (operator) {
        case "+":
            hasil = x+y;
            break;
        case "-":
            hasil = x-y;
            break;
        case "*":
            hasil = x*y;
            break;
        case "/":
            hasil = y !== 0 ? x/y : "tidak bisa dibagi 0";
            break;
        case "%":
            hasil = x%y;
            break;
    
        default:
            hasil = "Operator tidak dikenal";
            break;
    }
    return hasil;
}

const hasil1 = kalkulator(10, 2, "+");
console.log(hasil1); 
const hasil2 = kalkulator(1, 2, "-");
console.log(hasil2); 
const hasil3 = kalkulator(120, 2, "*");
console.log(hasil3); 
const hasil4 = kalkulator(10, 0, "/");
console.log(hasil4); 
const hasil5 = kalkulator(9, 2, "%");
console.log(hasil5); 
const hasil6 = kalkulator(10, 2, "=");
console.log(hasil6); 
