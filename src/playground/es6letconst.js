var nameVar = 'Brix';
var nameVar = 'Brielle';
console.log('nameVar', nameVar);

let nameLet = 'Gen';
nameLet = 'GinGin';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

const fullName = 'Gen Pedrigala';
let firstName;

const getFirstName = firstName => fullName.split(' ')[0];

console.log(getFirstName());
