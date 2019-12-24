//
// Object Destructuring
//

// const person = {
//   name: 'Brix',
//   age: 35,
//   location: {
//     city: 'Los Angeles',
//     temp: 75
//   }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const Book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: ' Penguin'
//   }
// };

// const { name: publisherName = 'self-published' } = Book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['1299 Terra', 'Los Angeles', 'California', '90210'];

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}`);
