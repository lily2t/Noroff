let text = "My favourite book is \"Harry Potter\". I love this book so much.";
let startIndex = text.indexOf("favourite book is");
let endIndex = text.indexOf("I love this book") - 2; // subtracting 2 to remove the period and space at the end of the substring

let favoriteBook = text.substring(startIndex, endIndex);

document.writeln(favoriteBook);

//OR 1. output   favorite book is “Harry Potter”

let favoriteBook1 = text.substring(3)
document.writeln(favoriteBook);

//2.output    My book is love.

let my = text.substring(0, 3)
let bookIs = text.substr(13, 7)
let love = text.substr(38, 5)
let textResult2 = my + bookIs + love
document.write('<br>', textResult2, '.')

//3. output    My book is “HARRY POTTER”.

let harryPotter = text.substr(21, 14)
let textResult3 = textResult2.slice(0, 10) + harryPotter.toUpperCase() + '.'
document.write('<br>', textResult3)

//4. output     potter harry

let harry = harryPotter.split(' ')

let quote = '"'
let reversedHarry = harry.reverse()
let finalHarry = reversedHarry.join(' ')
let newStr = finalHarry.replace(new RegExp(quote, "g"), "");
document.write('<br>', newStr.toLowerCase())

//OR

let harry1 = harryPotter.substr(1, 5)
let potter = harryPotter.substring(7, 13)
let textResult4 = potter + ' ' + harry1
document.write('<br>', textResult4.toLowerCase())