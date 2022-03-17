function SensorSubject() {
    this.handlers = [];  // observers
}

SensorSubject.prototype = {

    subscribe: function (fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    Notify: function (o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
}

class Controller {
    Update(data) {
        console.log("nouvelle donnée : " + data)
    }
}

var subject = new SensorSubject();
var controller = new Controller()
subject.subscribe(controller.Update)


