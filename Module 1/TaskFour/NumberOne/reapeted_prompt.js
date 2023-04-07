let num;

do {
    num = parseInt(prompt("Please enter a number greater than 1 but less than 20:"));
} while (num <= 1 || num >= 20 || isNaN(num));



for (let i = 1; i < 1000; i++) {
    if (i % 23 !== 0) {
        if(i % 2 !== 0){
        document.writeln(`${i}`);
        }
    }
}
document.write("Valid number entered: ", num);