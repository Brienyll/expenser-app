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
firebase
  .database()
  .ref()
  .set({
    name: 'Brix Angeles'
  });
