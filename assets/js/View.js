class View {

    constructor() {
        this.resetButton = this.getElement("#resetHistory");

        this.display_section = this.getElement('#display_section')

        this.title = this.createElement("h1")
        this.title.textContent = "Affichage des températures"

        this.displayList = this.createElement('ul', 'display-list')

        this.graph = this.getElement('#graph')

        this.display_section.append(this.title, this.displayList)

        this.chart;

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





    // supprime les anciens affichages de temperature
    removeChild(parentElement) {
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild)
        }
    }

    //affiche les donnés de la dernière capture de donné
    displayLastData(history) {
        this.removeChild(this.displayList)

        const lastCapteurs = history.slice(-1)[0];
        if (lastCapteurs) {
            for (let capteurIndex = 0; capteurIndex < lastCapteurs.length; capteurIndex++) {

                this.listValuesCapteur = []

                // récupère toutes les températures d'un capteur spécifique
                for (const historyElement of history)
                    this.listValuesCapteur.push(historyElement[capteurIndex]['Valeur']);
                this.listValuesCapteur = this.listValuesCapteur.map(Number) // str -> int

                const capteur = lastCapteurs[capteurIndex]


                //console.log(`Nom:${capteur['Nom']} ; Valeur: ${capteur['Valeur']} degree ; min :${Math.min.apply(Math, this.listValuesCapteur)}; max :${Math.max.apply(Math, this.listValuesCapteur)}`)


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

    valuesCapteur = []



    displayChart(history) {
        const lastCapteurs = history.slice(-1)[0];
        this.chartLabel = ['date']
        this.chartDate = []
        this.chartValues = []



        if (lastCapteurs) {
            for (let capteurIndex = 0; capteurIndex < lastCapteurs.length; capteurIndex++) {
                this.chartLabel.push(lastCapteurs[capteurIndex]['Nom'])
                this.valuesCapteur = []
                this.chartDate = []
                    // récupère toutes les températures d'un capteur spécifique
                for (const Element of history) {
                    let date = new Date(Element[capteurIndex]['Timestamp'] * 1000)
                    this.chartDate.push(date.getHours() +
                        ":" + date.getMinutes())

                    this.valuesCapteur.push(Element[capteurIndex]['Valeur']);
                }
                this.valuesCapteur = this.valuesCapteur.map(Number) // str -> int
                this.chartValues.push(this.valuesCapteur)

            }

            this.chartAll = []
            this.chartAll.push(this.chartLabel)

            for (let index = 0; index < this.chartDate.length; index++) {
                this.chartAll.push([this.chartDate[index], this.chartValues[0][index], this.chartValues[1][index]])


            }
            console.log(this.chartDate)
            console.log(this.chartValues)
            console.log(this.chartLabel)
            console.log(this.chartAll)
            this.chart = this.chartAll
        }
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(this.chart);

            var options = {
                title: 'Company Performance',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('graph'));

            chart.draw(data, options);
        }
    }



    NotificationTemp(history) {
        // const lastCapteurs = history.slice(-1)[1]
        const lastCapteurs = history.slice(-1)[0]
        if (lastCapteurs) {
            lastCapteurs.forEach(capteur => {
                if (parseInt(capteur.Valeur) >= 25) {

                    var notifTitle = "Alerte Temperature Haute";
                    var notifBody = `Température ${capteur.Nom}: ${capteur.Valeur}°C`;
                    var notifImg = '/assets/images/android-chrome-192x192.png';
                    var options = {
                        body: notifBody,
                        icon: notifImg
                    }
                    new Notification(notifTitle, options);

                }
                if (parseInt(capteur.Valeur) <= 15) {
                    var notifTitle = "Alerte Temperature Basse";
                    var notifBody = `Température ${capteur.Nom}: ${capteur.Valeur}°C`;
                    var notifImg = '/assets/images/android-chrome-192x192.png';
                    var options = {
                        body: notifBody,
                        icon: notifImg
                    }
                    new Notification(notifTitle, options);
                }
            })

            setTimeout(this.NotificationTemp, 120000);
        }

    }

    bindResetHistory(handler) {
        this.resetButton.addEventListener("click", (event) => {
            if (event.target.id === "resetHistory") {
                handler()
            }

        })
    }

}