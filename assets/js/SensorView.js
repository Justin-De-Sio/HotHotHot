class SensorView {
    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    }



    displayHistory(history) {
        console.log(history)
    }

    displayLastData(history) {

        const lastCapteursData = history.slice(-1)[0];
        if (lastCapteursData) {
            for (let i = 0; i < lastCapteursData.length; i++) {


                this.listValuesCapteur = []
                for (let j = 0; j < history.length; j++) {
                    this.listValuesCapteur.push(history[j][i]['Valeur']);
                }
                this.listValuesCapteur = this.listValuesCapteur.map(Number)

                let capteur = lastCapteursData[i]
                console.log(`Nom:${capteur['Nom']} ; Valeur: ${capteur['Valeur']} degree ; min :${Math.min.apply(Math, this.listValuesCapteur)}; max :${Math.max.apply(Math, this.listValuesCapteur)}`)

            }
        }
    }
}
