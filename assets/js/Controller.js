class Controller {
    constructor(sensorModel, sensorView) {
        this.model = sensorModel;
        this.view = sensorView;

        // Display initial data
        this.onHistoryChanged(this.model.history)

        this.view.bindResetHistory(this.handleResetHistory)

        /*We used arrow functions on all the handle events. This allows us to call them from the view using the this context of the controller.
        * If we did not use arrow functions, we would have to manually bind them,
        * like this.view.bindAddTodo(this.handleAddTodo.bind(this)). Yikes.*/
        this.model.bindHistoryChanged(this.onHistoryChanged)
    }

    onHistoryChanged = (history) => {
        this.view.displayHistory(history)
        this.view.displayLastData(history)
        this.view.NotificationTemp(history)
    }

    handleResetHistory = () => this.model.resetHistory();
}

let app = new Controller(new Model(), new View())
let publisher = new Publisher();
publisher.subscribe(app.model.update)
