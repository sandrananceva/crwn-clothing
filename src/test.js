import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('lJuUl00B9RL04mLEU2NC').collection('cartItems').doc('FrtEDhnzEgp5QgtwJllT');
//or
firestore.doc('users/lJuUl00B9RL04mLEU2NC/cartItems/FrtEDhnzEgp5QgtwJllT');
firestore.collection('users/lJuUl00B9RL04mLEU2NC/cartItems');
