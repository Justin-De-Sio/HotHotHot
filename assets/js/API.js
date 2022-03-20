/*Websocket*/
var socket = new WebSocket('wss://ws.hothothot.dog:9502');

socket.onopen = () => {
    // Display user friendly messages for the successful establishment of connection
    setTimeout(() => {
        if (socket.readyState === 1) {
            socket.send("coucou !");
            console.log("Connexion établie au serveur de websocket");
        } else {
            console.log(`état socket.readyState${socket.readyState}`);
        }
    }, 5000)
}
socket.onmessage = (event) => {
    if (event.data) {
        let data = JSON.parse(event.data);
        subject.Notify(data)
    } else
        console.log("pas de donné")
}

setInterval(api, 10000)

function api() {
    if (/*socket.readyState !==*/ 1) {
        console.log("connexion au websocket impossible. connexion à l'API...")
        let label = document.getElementById("status");
        label.innerHTML = "Connexion API";

        const apiCapteurs = 'https://hothothot.dog/api/capteurs'
        fetch(apiCapteurs)
            .then((response) => response.json()
                .then((data) => {
                    subject.Notify(data)

                }))
    }
}