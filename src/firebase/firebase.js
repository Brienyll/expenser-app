import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDXNjIWc9YnBnA1R_Bh2IdKByUu-FVmzQE',
  authDomain: 'brexpense.firebaseapp.com',
  databaseURL: 'https://brexpense.firebaseio.com',
  projectId: 'brexpense',
  storageBucket: 'brexpense.appspot.com',
  messagingSenderId: '565399085681',
  appId: '1:565399085681:web:88173f1454fdb5c59471d0',
  measurementId: 'G-DCYHG26GHX'
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };
// database.ref('Expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('notes/-M32DnBvrXxmg5zslKzT').remove();

// database.ref('notes').push({
//   title: 'Course',
//   body: 'Firebase, React Native, Node'
// });

// database.ref('notes').set(notes);
// database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log('Error', e);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(33);
// }, 10500);
// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => {
//     console.log('Error fetching data', e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Brix Angeles',
//     stressLevel: 6,
//     job: {
//       title: 'Web Developer',
//       company: 'Tinder'
//     },
//     location: {
//       city: 'Los Angeles',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(err => {
//     console.log('Failed', err);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'TikTok',
//   'location/city': 'Culver'
// });
