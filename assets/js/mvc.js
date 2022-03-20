class SensorModel {

    constructor() {
        this._history = JSON.parse(localStorage.getItem('history')) || []
        this.update = this.update.bind(this)
    }


    update(data) {
        // c'est ici que l'on met tout nos methods à activé à chaque mise à jour
        let capteurs = data.capteurs

        // let interiorData = capteurs[0];
        // this.interiorValue = interiorData['Valeur'];
        // let exteriorData = capteurs[1];
        // this.exteriorValue = exteriorData['Valeur'];
        // this.time = interiorData.Timestamp;
        this.addDate(capteurs)
        // this.dataCapteurExtrreiur = data.capteurs[1];
        // app.sensorView.displayDataByConsole(this.exteriorValue)// Console.log

    }

    addDate(data) {
        this._history.push(data)
        this._commit(this._history)
    }

    get history() {
        this._history = JSON.parse(localStorage.getItem('history')) || []
        return this._history;
    }

    _commit(history) {
        this.onHistoryChanged(this.history)
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

    displayHistory(history) {
        this.to
    }
}

class SensorController {
    constructor(sensorModel, sensorView) {
        this.sensorModel = sensorModel;
        this.sensorView = sensorView;

        // Display initial data
        this.onHistoryChanged(this.sensorModel._history)
    }

    onHistoryChanged = (history) => this.sensorView.displayHistory(history)
}

const app = new SensorController(new SensorModel(), new SensorView())
var subject = new Publisher();
subject.subscribe(app.sensorModel.update)
