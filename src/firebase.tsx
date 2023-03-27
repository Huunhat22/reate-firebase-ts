import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
        // apiKey: process.env.REACT_APP_APIKE,
        // authDomain: process.env.REACT_APP_AUTHDOMAI,
        // projectId: process.env.REACT_APP_PI,
        // storageBucket: process.env.REACT_APP_S,
        // messagingSenderId: process.env.REACT_APP_SI,
        // appId: process.env.REACT_APP_APPI,

        apiKey: 'AIzaSyDP5ldbUKCDbp6T9eSk_KLAgxSRt_guZoY',
        authDomain: 'test-firebase-6cf7e.firebaseapp.com',
        projectId: 'test-firebase-6cf7e',
        storageBucket: 'test-firebase-6cf7e.appspot.com',
        messagingSenderId: '29447636717',
        appId: '1:29447636717:web:9a172cab21798b67e86ee4',
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);