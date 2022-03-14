/*Websocket*/
// TODO faire fonctionner le websocket

var socket = new WebSocket('wss://ws.hothothot.dog:950');//2
socket.onopen = () => {
    console.log("Connexion établie");
    // Display user friendly messages for the successful establishment of connection
    let label = document.getElementById("status");
    setTimeout(() => {
        if (socket.readyState === 1) {
            socket.send("coucou !");
            label.innerHTML = "Connexion établie";
        } else {
            console.log(`état socket.readyState${socket.readyState}`);
            //se connecter a une API

            console.log("connexion API")

            let urlint ='https://hothothot.dog/api/capteurs/exterieur'
            fetch(urlint)
                .then((response) => response.json()
                    .then((data)=>{console.log(data)}))
            var ApiITemperatur = data.capteur[0].Valeur;
            var ApiITimestamp = response.capteur[0].Timestamp;

            let urlext ='https://hothothot.dog/api/capteurs/interieur'
            fetch(urlext)
                .then((response) => response.json()
                    .then((data)=>{console.log(data)}))
            var ApiETemperatur = data.capteur[0].Valeur;
            var ApiETimestamp = data.capteur[0].Timestamp;

            console.log(ApiETemperatur, ApiITemperatur, ApiITimestamp, ApiETimestamp)

        }
    }, 5000)
}

socket.onmessage = (event) => {
    var datas = document.getElementById("datas");
    if (event.data)
        datas.innerHTML = event.data
    else
        datas.innerHTML = "pas de donner"
    var msg = JSON.parse(event.data)
    // console.log(msg)
    var interieur = msg.capteurs[0].Valeur;
    var exterieur = msg.capteurs[1].Valeur;

    console.log("int",interieur)
    console.log("est",exterieur)

}

// api

    let url ='https://hothothot.dog/api/capteurs/exterieur'
    fetch(url)
        .then((response) => response.json()
            .then((data)=>{console.log(data)}))