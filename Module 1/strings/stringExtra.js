const txt = "This seems familiar this time, hope continues."
// the slice, substr and substring methods
let part = txt.slice(-15)
let part2 = txt.substring(4, -13)
let part3 = txt.substr(3, 23)

document.writeln('<br>', part)
document.writeln('<br>', part2)
document.writeln('<br>', part3)

//the replace method

let txt2 = "My favorite book is \"Harry Potter\". I love this book so much.";
let result = txt2.replace("book", "movie");
document.writeln('<br>', result);
let result2 = txt2.replace(/book/g, "movie");
document.writeln('<br>', result2);

//conversion to upper and lowercase

let upperCase = txt2.toUpperCase();
let lowerCase = txt2.toLowerCase();
document.writeln('<br>', upperCase);
document.writeln('<br>', lowerCase);


//string search methods

let result1 = text.startsWith("My");
let result3 = text.includes("My");
let result4 = text.includes("My", 4);
let result5 = text.endsWith("book");

document.writeln('<br>', result1);
document.writeln('<br>', result3);
document.writeln('<br>', result4);
document.writeln('<br>', result5);