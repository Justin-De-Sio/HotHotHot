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
