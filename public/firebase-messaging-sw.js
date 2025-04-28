importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
    apiKey: 'AIzaSyC6hFL7YNvjHsqNqltGdXuaTKlPQyUlHyw',
        authDomain: 'ample-earn.firebaseapp.com',
        projectId: 'ample-earn',
        storageBucket: 'ample-earn.firebasestorage.app',
        messagingSenderId: '365557667199',
        appId: '1:365557667199:web:8b668ff7739de9b6cb364a',
        measurementId: 'G-RF66ZED184',
})

// Retrieve firebase messaging
const messaging = firebase?.messaging()

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
