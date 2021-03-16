importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js');

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

messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
});