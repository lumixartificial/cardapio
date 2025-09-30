// service-worker.js
self.addEventListener('push', function(event) {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: 'logo.png', // Ícono que aparecerá en la notificación
    badge: 'logo.png'
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});