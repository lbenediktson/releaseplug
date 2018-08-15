import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAgpIVXwk6mTsBd9oUMPdup3FHad3mQXog',
  authDomain: 'releaseplugdb.firebaseapp.com',
  databaseURL: 'https://releaseplugdb.firebaseio.com',
  projectId: 'releaseplugdb',
  storageBucket: '',
  messagingSenderId: '982476243922'
}

const firebaseApp = Firebase.initializeApp(config)

const storage = firebaseApp.storage().ref()

export default storage
