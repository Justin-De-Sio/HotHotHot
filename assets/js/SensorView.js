class SensorView {

    constructor() {
        this.display_section = this.getElement('#display_section')

        this.title = this.createElement("h1")
        this.title.textContent = "Affichage des températures"

        this.displayList = this.createElement('ul', 'display-list')

        this.display_section.append(this.title, this.displayList)

    }

    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    }

    // Retrieve an element from the DOM
    getElement(selector) {
        return document.querySelector(selector)
    }

    displayHistory(history) {
        console.log(history)
    }

    removeChild(parentElement){
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild)
        }
    }
    displayLastData(history) {
        this.removeChild(this.displayList)

        const lastCapteurs = history.slice(-1)[0];
        if (lastCapteurs) {
            for (let capteurIndex = 0; capteurIndex < lastCapteurs.length; capteurIndex++) {

                this.listValuesCapteur = []
                for (const historyElement of history)
                    this.listValuesCapteur.push(historyElement[capteurIndex]['Valeur']);

                this.listValuesCapteur = this.listValuesCapteur.map(Number) // str -> int
                console.log(this.listValuesCapteur)
                let capteur = lastCapteurs[capteurIndex]

                console.log(`Nom:${capteur['Nom']} ; Valeur: ${capteur['Valeur']} degree ; min :${Math.min.apply(Math, this.listValuesCapteur)}; max :${Math.max.apply(Math, this.listValuesCapteur)}`)


                this.displayElement = this.createElement("li", capteur['Nom'])

                this.displayList.append(this.displayElement)
                this.temperature_name = this.createElement("p", "temperature_name")

                this.temperature_name.textContent = `Nom:${capteur['Nom']}`
                this.temperature_value = this.createElement("p", "temperature_value")

                this.temperature_value.textContent = `Valeur: ${capteur['Valeur']} °C`
                this.temperature_maximum = this.createElement("p", "temperature_maximum")

                this.temperature_maximum.textContent = `max :${Math.max.apply(Math, this.listValuesCapteur)}`
                this.temperature_minimum = this.createElement("p", "temperature_minimum")

                this.temperature_minimum.textContent = `min :${Math.min.apply(Math, this.listValuesCapteur)}`

                this.displayElement.append(
                    this.temperature_name,
                    this.temperature_value,
                    this.temperature_minimum,
                    this.temperature_maximum)

            }
        }
    }


}
