console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by elaachi",
    icon: "https://media-exp1.licdn.com/dms/image/C4D0BAQFrrmgNbpbM4g/company-logo_200_200/0/1551086911955?e=2159024400&v=beta&t=FqA0WbBPR1Ox09AASE7zaCnDNobOSN0mS_WPJgIbmbA"
  });
});
