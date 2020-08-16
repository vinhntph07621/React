import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDtHXXtNib4Dcm0mc_dnyLHSvf-dHE8ywc",
  authDomain: "reactjs-68901.firebaseapp.com",
  databaseURL: "https://reactjs-68901.firebaseio.com",
  projectId: "reactjs-68901",
  storageBucket: "reactjs-68901.appspot.com",
  messagingSenderId: "970861939204",
  appId: "1:970861939204:web:59eba539dcad5316658351"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase