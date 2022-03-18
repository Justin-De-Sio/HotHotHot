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
        data = data.capteurs[0].Valeur
        app.sensorView.displayDataByConsole(data )// Console.log
        console.log("type de la fonction: " + typeof (app.sensorModel.addData))


        this.addData(data) // TODO uncaught TypeError: this.addData is not a function

    }

    addData() {
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
