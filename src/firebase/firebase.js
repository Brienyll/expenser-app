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
database.ref().set({
  name: 'Brix Angeles',
  location: {
    city: 'Los Angeles',
    country: 'United States'
  }
});

database.ref('attributes').set({
  height: 78,
  weight: 216
});
