//let name = ['AMANEUEL', 'TESFAYOHANNES', 35, 'BLUE']
//document.write(`<br>${name}`)

//Fetchs the user data and deplay the concatnated form
let firstName = prompt('Enter Your first name: ')
let lastName = prompt('Enter your last name: ')
let age = parseInt(prompt('Enter your age: '))

let fullName = []
fullName.push(firstName)
fullName.push(lastName)
fullName.push(age)

document.write('Welcome ' + fullName.join(' '))