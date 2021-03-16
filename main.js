// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAUAr1ZuEMDvphuyIoMxj4t5UjVtRbQDgA",
    authDomain: "push-test-307802.firebaseapp.com",
    projectId: "push-test-307802",
    storageBucket: "push-test-307802.appspot.com",
    messagingSenderId: "97808521800",
    appId: "1:97808521800:web:eb38d937f8355f3465967d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
console.log({messaging});

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({vapidKey: 'BMBzjVIIco_D-BLXizlikmjV3_PWXWEaeVl3bbO7i2XaYPIY1kwaNJihZuuOF9kdxfDRvJXcD4Nva99p4w4vNaE'}).then((currentToken) => {
    if (currentToken) {
        console.log({currentToken});
        // Send the token to your server and update the UI if necessary
        // ...
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});
