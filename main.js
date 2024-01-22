// Sum and for


const numberArray = [4,5,6,7,8]

let manualSum = numberArray[0] + numberArray[1] + numberArray[2] + numberArray[3] + numberArray[4];
console.log(`Summed numbers are ${manualSum}`)

let sum = 0
for (let index = 0; index < numberArray.length; index++) {
    const element = numberArray[index];
    sum = sum + element;
}

console.log(`Sum of Array with for is ${sum}`)


let sum2 = 0;

numberArray.forEach(element => {
    sum2 += element
});

console.log(`Sum with Foreach is ${sum2}`)


////// End of sum


// object Array
const objectArray = [
    {Name: "name1", age: 25, address: "aaa street 25"},
    {Name: "name2", age: 15, address: "aaa street 2324"},
    {Name: "name3", age: 22, address: "aaa street 27"},
]


// Access object items: 

console.log(`My Name is ${objectArray[0].Name}`)
console.log(`My Age is ${objectArray[0].age}`)
console.log(`My Address is ${objectArray[0].address}`)


// Conditioning

if(objectArray[0].age < 19) {
    console.log("I am a teenager")
} else {
    console.log("I am an adult")
}