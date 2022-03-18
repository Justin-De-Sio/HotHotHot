class SensorController {
    constructor(sensorModel, sensorView) {
        this.sensorModel = sensorModel;
        this.sensorView = sensorView;
    }

}

class SensorModel {


    constructor() {
        this._history = JSON.parse(localStorage.getItem('history')) || []
    }


    update(data) {
        // c'est ici que l'on met tout nos methods à activé à chaque mise à jour
        this.data = data.capteurs[0].Valeur
        this.dataCapteurInterieur = data.capteurs[0];
        this.dataCapteurExtrreiur = data.capteurs[1];
        app.sensorView.displayDataByConsole(this.dataCapteurExtrreiur.Valeur )// Console.log


    }

    addData(data) {
        this._history.push(data)
        this._commit(this._history)
    }


    get history() {
        this._history = JSON.parse(localStorage.getItem('history')) || []
        return this._history;
    }

    _commit(history) {
        localStorage.setItem('history', JSON.stringify(history))
    }


    clearHistory() {
        this._commit([])
    }

}

class SensorView {
    displayDataByConsole(data) {
        console.log("nouvelle temperature : " + data)
    }
}

const app = new SensorController(new SensorModel(), new SensorView())
var subject = new SensorSubject();
subject.subscribe(app.sensorModel.update)
