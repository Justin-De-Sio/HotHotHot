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
        this.addData(capteurs)
        // this.dataCapteurExtrreiur = data.capteurs[1];
        // app.sensorView.displayDataByConsole(this.exteriorValue)// Console.log

    }

    addData(data) {
        this._history.push(data)
        this._commit(this._history)
    }

    get history() {
        this._history = JSON.parse(localStorage.getItem('history')) || []
        return this._history;
    }

    bindHistoryChanged(callback) {
        this.onHistoryChanged = callback
    }

    _commit(history) {
        localStorage.setItem('history', JSON.stringify(history))
        this.onHistoryChanged(this.history)
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
        console.log(history)
    }

    displayLastData(history) {
        console.log(history)
            const lastElement = history.slice(-1)[0];
            if (lastElement){
                lastElement.forEach(capteur => console.log(capteur))
            }
    }
}

class SensorController {
    constructor(sensorModel, sensorView) {
        this.sensorModel = sensorModel;
        this.sensorView = sensorView;

        // Display initial data
        this.onHistoryChanged(this.sensorModel.history)

        this.sensorModel.bindHistoryChanged(this.onHistoryChanged)
    }

    onHistoryChanged = (history) => {
        this.sensorView.displayHistory(history)
        this.sensorView.displayLastData(history)
    }
}

const app = new SensorController(new SensorModel(), new SensorView())
var subject = new Publisher();
subject.subscribe(app.sensorModel.update)
