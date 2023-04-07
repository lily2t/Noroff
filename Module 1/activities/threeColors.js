//receives and logs three user inputs to an array

let colors = []
let color1 = prompt('Enter a color:')
let color2 = prompt('Enter the second color: ')
let color3 = prompt('Enter the third color: ')

//pushes the user input to an array

colors.push(color1)
colors.push(color2)
colors.push(color3)

let upperColors = colors.map(color => color.toUpperCase())

document.write(upperColors)
