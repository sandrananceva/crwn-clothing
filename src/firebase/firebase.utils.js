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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapShot = await userRef.get()
	if(!snapShot.exists) {
		const {displayName, email} = userAuth
		const createAt = new Date()

		try {
			await userRef.set({displayName, email, createAt, ...additionalData})
		} catch (error) {
			console.log('error creating user', error.message)
		}

	}

   return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 