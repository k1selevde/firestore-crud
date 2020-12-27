import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};


//Init
firebase.initializeApp(firebaseConfig)


export default firebase;

// const firebaseConfig = {
//     apiKey: process.env["API_KEY "]"AIzaSyBfpOjj-qiDj0bBchciobeVJ_YQrD7SvLM",
//     authDomain: "react-example-10ad3.firebaseapp.com",
//     projectId: "react-example-10ad3",
//     storageBucket: "react-example-10ad3.appspot.com",
//     messagingSenderId: "609191692591",
//     appId: "1:609191692591:web:ba1c17b3c94c44593079da"
// };