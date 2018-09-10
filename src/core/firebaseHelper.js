import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDZR7lMB-4aPcH8fz19bE1ikZKL36IFpqs',
  authDomain: 'ywc16-register.firebaseapp.com',
  databaseURL: 'https://ywc16-register.firebaseio.com',
  projectId: 'ywc16-register',
  storageBucket: 'ywc16-register.appspot.com',
  messagingSenderId: '270317938903'
}

firebase.initializeApp(config)

export const firebaseStorage = firebase.storage()
