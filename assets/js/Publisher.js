// simple observer
function Publisher() {
    this.handlers = [];  // observers/subscribers
}

Publisher.prototype = {

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
    
    notify: function (newData, thisObj) {
        const scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, newData);
        });
    }
}




