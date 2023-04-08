let num;
do {
    num = parseInt(prompt('Enter a number between 0 and 100'))
} while (num < 0 || num > 100 || isNaN(num))

//let x = 0;
function increment() {
    for (let i = 1; i <= 100; i++) {
        document.writeln´´(i)
    }
    document.writeln('Game Over')

}
function decrement() {
    for (let i = 100; i >= 0; i--) {
        document.writeln(i)
    }
    document.writeln('Game Over')


}
