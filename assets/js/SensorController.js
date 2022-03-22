

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
