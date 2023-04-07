//create an object
const obj1 = {
    firstName: 'Samuel',
    lastName: 'Resom',
    occup: 'California',
    age: 34,
    isMarried: true,
    education: 'high school',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

//DISPLAYING all elements of the object
for (let i in obj1) {
    console.log(i + ':' + obj1[i])
}
console.log(obj1.fullName())
//console.log(obj1)

let arr = ['hjk', 32, 'meharena', 'klj', { name: 'mearig', gender: 'male', age: 34 }]

console.log(arr[(arr.length - 1) / 2])
console.log(arr)