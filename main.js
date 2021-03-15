if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service worker registration failed, error:', error);
        });
}

console.log(navigator.serviceWorker);

// Notification.requestPermission(function(status) {
//     console.log('Notification permission status:', status);
//     displayNotification();
// });
//
// function displayNotification() {
//     console.log(navigator);
//     console.log(navigator.serviceWorker);
//     navigator.serviceWorker.getRegistration().then(function(reg) {
//       console.log("reg", reg);
//       reg.showNotification('Hello world!');
//     });
// }