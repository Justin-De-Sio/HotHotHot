/*Websocket*/
var socket = new WebSocket('wss://ws.hothothot.dog:9502');

socket.onopen = () => {
    // Display user friendly messages for the successful establishment of connection
    let label = document.getElementById("status");
    setTimeout(() => {
        if (socket.readyState === 1) {
            socket.send("coucou !");
            label.innerHTML = "Connexion établie";
        } else {
            console.log(`état socket.readyState${socket.readyState}`);
        }
    }, 5000)
}
socket.onmessage = (event) => {
    var datas = document.getElementById("datas");
    if (event.data) {
        datas.innerHTML = event.data
        var msg = JSON.parse(event.data)
        subject.Notify(msg)
    } else
        datas.innerHTML = "pas de donner"
}
setInterval(() => {
    if (socket.readyState !== 1) {
        console.log("connexion au websocket impossible. connexion à l'API...")
        let label = document.getElementById("status");
        label.innerHTML = "Connexion API";

        const apiCapteurs = 'https://hothothot.dog/api/capteurs'
        fetch(apiCapteurs)
            .then((response) => response.json()
                .then((data) => {
                    subject.Notify(data)
                    console.log(data)
                }))
    }
}, 10000)


