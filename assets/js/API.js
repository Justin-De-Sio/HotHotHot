/*API*/
/*Websocket*/

const socket = new WebSocket('wss://ws.hothothot.dog:9502');

socket.onopen = () => {
    setTimeout(() => {
        if (socket.readyState === 1) {
            socket.send("coucou !");
            //Connexion établie au serveur de websocket
        }
    }, 5000)
}

socket.onmessage = (event) => {
    if (event.data) {
        let data = JSON.parse(event.data);
        publisher.notify(data)
    }
}

/*Si la communication n'est pas ouverte avec le WebSocket alors on utilise l'api simple
* On vérifie cette condition toutes les minutes*/
setInterval(() => {
    if (socket.readyState !== 1) {
        const urlSensorSimpleAPI = 'https://hothothot.dog/api/capteurs'
        fetch(urlSensorSimpleAPI)
            .then((response) => response.json()
                .then((data) => {
                    publisher.notify(data)

                }))
    }
}, 60000)
