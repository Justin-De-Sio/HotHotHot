/*
 Enregistrement service worker.
 Vérifie si l'API du service worker est disponible.
 Si c'est le cas, le service worker sw.js est enregistré une fois la page chargée
 */
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('../../sw.js').then(reg => {
        // enregistrement ok
        console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(error => {
        // echec de l'enregistrement
        console.log('Registration failed with ' + error);
    });

}


/* Bouton d'installation de notre PWA*/

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', () => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});


/*
 *Notifications
 *Pour notre exemple on simule à interval régulier une analyse de valeur
 */
var button = document.getElementById("notifications");
button.addEventListener('click', () => {
    Notification.requestPermission().then((result) => {
        if (result === 'granted') NotificationTemp();
    });
});


// function randomNotification() {
//     var randomNumber = getRandomInt(5);
//     console.log(randomNumber);
//     if (randomNumber >= 2) {
//
//         var notifTitle = "Chaud, non ?";
//         var notifBody = 'Température : ' + randomNumber + '.';
//         var notifImg = '/assets/images/android-chrome-192x192.png';
//         var options = {
//             body: notifBody, icon: notifImg
//         }
//         new Notification(notifTitle, options);
//
//     }
//     setTimeout(randomNotification, 30000);
// }

function NotificationTemp() {
    var TempExt = msg.capteurs[1].Valeur
    if (TempExt >= 2) {

        var notifTitle = "Chaud, non ?";
        var notifBody = 'Température : ' + TempExt + '.';
        var notifImg = '/assets/images/android-chrome-192x192.png';
        var options = {
            body: notifBody,
            icon: notifImg
        }
        new Notification(notifTitle, options);

    }
    setTimeout(NotificationTemp, 30000);
}

//On génére un nombre aléatoire pour la démo
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


