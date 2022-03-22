class SensorController {
    constructor(sensorModel, sensorView) {
        this.sensorModel = sensorModel;
        this.sensorView = sensorView;

        // Display initial data
        this.onHistoryChanged(this.sensorModel.history)

        /*We used arrow functions on all the handle events. This allows us to call them from the view using the this context of the controller.
        * If we did not use arrow functions, we would have to manually bind them,
        * like this.view.bindAddTodo(this.handleAddTodo.bind(this)). Yikes.*/
        this.sensorModel.bindHistoryChanged(this.onHistoryChanged)
    }

    onHistoryChanged = (history) => {
        this.sensorView.displayHistory(history)
        this.sensorView.displayLastData(history)
    }
}

let app = new SensorController(new SensorModel(), new SensorView())
let publisher = new Publisher();
publisher.subscribe(app.sensorModel.update)
