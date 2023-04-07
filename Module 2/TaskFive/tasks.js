function hello() {
    return 'HELLO WORLD!'
}
function helloA() {
    return 'Hello a!'
}
function helloB() {
    return 'Hello b!'
}
function greet(para) {
    return `Hello ${para}`
}
function logIt(log_para) {
    console.log(log_para)
}
function myStringFunction(str) {

    let strLen = () => { for (let i = 0; i < str.length; i++) { } }
    console.log(`The number of characters in the string is: ${strLen}`)
}
function upper(str) {
    let strUpper = str.toUpperCase();
    return strUpper
}