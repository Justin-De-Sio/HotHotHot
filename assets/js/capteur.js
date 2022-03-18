/*Websocket*/
// TODO faire fonctionner le websocket

var socket = new WebSocket('wss://ws.hothothot.dog:950');//2
if(socket.onopen) {
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
        var interieur = msg.capteurs[0].Valeur;
        var iTimestamp = msg.capteurs[0].Timestamp;

        var exterieur = msg.capteurs[1].Valeur;
        var eTimestamp = msg.capteurs[1].Timestamp;


        console.log("int",interieur)
        console.log("est",exterieur)

    }
}
else{
    //se connecter a une API

    console.log("connexion au websocket impossible connexion à l'API")
    let label = document.getElementById("status");
    label.innerHTML = "Connexion API";

    let urlint ='https://hothothot.dog/api/capteurs/exterieur'
    fetch(urlint)
        .then((response) => response.json()
            .then((data)=>{console.log(data)}))

    // var ApiITemperatur =  Response.capteurs.Valeur;
    // var ApiITimestamp = response.capteur[0].Timestamp;

    // let urlext ='https://hothothot.dog/api/capteurs/interieur'
    // fetch(urlext)
    //     .then((response) => response.json()
    //         .then((data)=>{console.log(data)}))

    // console.log(ApiETemperatur, ApiITemperatur, ApiITimestamp, ApiETimestamp)
}