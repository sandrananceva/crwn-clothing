import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBSI5WRWHt8VenM1NRMCEDw6wgd-9j_HIM',
	authDomain: 'crwn-db-7dff6.firebaseapp.com',
	databaseURL: 'https://crwn-db-7dff6.firebaseio.com',
	projectId: 'crwn-db-7dff6',
	storageBucket: 'crwn-db-7dff6.appspot.com',
	messagingSenderId: '188906480210',
	appId: '1:188906480210:web:1d1637e216f6c9e9fe758b',
	measurementId: 'G-BRGKGHMPJD'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 