import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAgpIVXwk6mTsBd9oUMPdup3FHad3mQXog',
  authDomain: 'releaseplugdb.firebaseapp.com',
  databaseURL: 'https://releaseplugdb.firebaseio.com',
  projectId: 'releaseplugdb',
  storageBucket: 'releaseplugdb.appspot.com',
  messagingSenderId: '982476243922'
}

const firebaseApp = firebase.initializeApp(config)
// const db = firebaseApp.database()
// storage: firebaseApp.storage().ref()

export default firebaseApp
