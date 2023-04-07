const str1 = "Hello"
const str2 = "My"
const str3 = "pretty"
const str4 = "World"

function getLexicographicValue(str) {
    let value = "";
    for (var i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        value += charCode.toString();
    }
    return parseInt(value);
}

document.writeln(getLexicographicValue(str1), '<br>');
document.writeln(getLexicographicValue(str2), '<br>');
document.writeln(getLexicographicValue(str3), '<br>');
document.writeln(getLexicographicValue(str4), '<br>');

document.writeln(str1 + ' ' + str2 + ' ' + str3 + ' ' + str4);