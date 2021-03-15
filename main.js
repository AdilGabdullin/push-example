Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
    displayNotification();
});

function displayNotification() {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification('Hello world!');
    });
}