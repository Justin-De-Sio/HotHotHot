class Model {

    constructor() {
        this._history = JSON.parse(localStorage.getItem('history')) || []
        this.update = this.update.bind(this)
    }

    // update(data) is subscribed to Publisher
    // it is called at each notify(data)
    update(data) {
        let capteurs = data['capteurs']
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

    resetHistory() {
        this._commit(this._history = [])
        this.onHistoryChanged(this.history)
    }
}
