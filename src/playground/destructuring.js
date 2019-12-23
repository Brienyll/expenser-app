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

const Book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: ' Penguin'
  }
};

const { name: publisherName = 'self-published' } = Book.publisher;

console.log(publisherName);
