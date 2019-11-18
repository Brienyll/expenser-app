const add = (a, b) => {
  return a + b;
};

console.log(55, 1, 1001);

const user = {
  name: 'Brix',
  cities: ['San Antonio', 'Los Angeles', 'Chicago'],
  printPlacesLived() {
    const cityMessages = this.cities.map(city => {
      return this.name + ' has lived in ' + city;
    });
    return cityMessages;
  }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  numbers: [5, 6, 3, 5],
  multiplyBy: 9,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
