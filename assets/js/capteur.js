/*Websocket*/
// TODO faire fonctionner le websocket

var socket = new WebSocket('wss://ws.hothothot.dog:9502');
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
    console.log(event.data)
}


// api

    let url ='https://hothothot.dog/api/capteurs/exterieur'
    fetch(url)
        .then((response) => response.json()
            .then((data)=>{console.log(data)}))