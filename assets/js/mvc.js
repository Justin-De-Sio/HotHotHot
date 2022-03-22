class SensorModel {

    constructor() {
        this._history = JSON.parse(localStorage.getItem('history')) || []
        this.update = this.update.bind(this)
    }

    update(data) {
        // c'est ici que l'on met tout nos methods à activé à chaque mise à jour
        let capteurs = data.capteurs

        this.addData(capteurs)
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

        const lastCapteursData = history.slice(-1)[0];
        if (lastCapteursData) {
            for (let i = 0; i < lastCapteursData.length; i++) {


                this.listValuesCapteur=[]
                for (let j = 0; j < history.length; j++) {
                    this.listValuesCapteur.push(history[j][i].Valeur);
                }
                this.listValuesCapteur = this.listValuesCapteur.map(Number)

                let capteur = lastCapteursData[i]
                console.log(`Nom:${capteur.Nom} ; Valeur: ${capteur.Valeur} degree ; min :${Math.min.apply(Math, this.listValuesCapteur)}; max :${Math.max.apply(Math, this.listValuesCapteur)}`)

            }

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
        // this.sensorView.displayHistory(history)
        this.sensorView.displayLastData(history)
    }
}

const app = new SensorController(new SensorModel(), new SensorView())
var subject = new Publisher();
subject.subscribe(app.sensorModel.update)
