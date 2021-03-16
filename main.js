// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/push-example/service-worker.js')
//         .then(function(registration) {
//             console.log('Registration successful, scope is:', registration.scope);
//         })
//         .catch(function(error) {
//             console.log('Service worker registration failed, error:', error);
//         });
// }
//
// Notification.requestPermission(function(status) {
//     console.log('Notification permission status:', status);
//     displayNotification();
// });
//
// function displayNotification() {
//     navigator.serviceWorker.getRegistration().then(function(reg) {
//       reg.showNotification('Hello world!');
//     });
// }

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/push-example/service-worker.js').then(function(reg) {
        console.log('Service Worker Registered!', reg);

        reg.pushManager.getSubscription().then(function(sub) {
            if (sub === null) {
                // Update UI to ask user to register for Push
                console.log('Not subscribed to push service!');
            } else {
                // We have a subscription, update the database
                console.log('Subscription object: ', sub);
                subscribeUser();
            }
        });
    })
        .catch(function(err) {
            console.log('Service Worker registration failed: ', err);
        });
}

function subscribeUser() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function(reg) {

            reg.pushManager.subscribe({
                userVisibleOnly: true
            }).then(function(sub) {
                console.log('Endpoint URL: ', sub.endpoint);
            }).catch(function(e) {
                if (Notification.permission === 'denied') {
                    console.warn('Permission for notifications was denied');
                } else {
                    console.error('Unable to subscribe to push', e);
                }
            });
        })
    }
}