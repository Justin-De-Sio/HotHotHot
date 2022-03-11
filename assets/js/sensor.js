class SensorController {
    constructor(sensorModel, sensorView) {
        this.sensorModel = sensorModel;
        this.sensorView = sensorView;
    }

}

class SensorModel {
    constructor(name) {
        this.datas = JSON.parse(localStorage.getItem('data')) || []
        this.name = name;

        this.connectionWebSocket()

    }



    getDataWebSocket(){
        // au retour...
        socket.onmessage = function (event) {
            return event.data
        }
    }

    addSensorData(data) {
        if (){
            data = this.getDataWebSocket()
        }
        else{
            if (this.name === "exterieur") {

            } else if (this.name === "interieur"){

            }
        }

            this.datas.push(data)
        this._commit(this.datas)
    }

    _commit(datas) {
        localStorage.setItem('datas', JSON.stringify(datas))
    }
}

class SensorView {
}

const app = new SensorController(new SensorModel(), new SensorView())