Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
    displayNotification();
});

function displayNotification() {
    console.log(navigator);
    console.log(navigator.serviceWorker);
    navigator.serviceWorker.getRegistration().then(function(reg) {
      console.log("reg", reg);
      reg.showNotification('Hello world!');
    });
}