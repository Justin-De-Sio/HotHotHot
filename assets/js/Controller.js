class Controller {
    constructor(sensorModel, sensorView) {
        this.model = sensorModel;
        this.view = sensorView;

        // Display initial data
        this.view.displayLastData(this.model._history)
        this.view.displayChart(this.model._history)
        this.view.displayTab(this.model._history)

        this.view.bindResetHistory(this.handleResetHistory)
        this.model.bindHistoryChanged(this.onHistoryChanged)
    }

    onHistoryChanged = (history) => {

        this.view.displayLastData(history)
        this.view.displayChart(history)
        this.view.displayTab(history)
        this.view.NotificationTemp(history)
    }


    handleResetHistory = () => this.model.resetHistory();

}

let app = new Controller(new Model(), new View())
let publisher = new Publisher();
publisher.subscribe(app.model.update)