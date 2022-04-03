class View {

    constructor() {
        this.resetButton = this.getElement("#resetHistory");

        this.display_section = this.getElement('#display_section')

        this.title = this.createElement("h1")
        this.title.textContent = "Affichage des températures"

        this.displayList = this.createElement('ul', 'display-list')

        this.graph = document.getElementById('graph')

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

                var listValuesCapteur = []

                // récupère toutes les températures d'un capteur spécifique
                for (const historyElement of history)
                    listValuesCapteur.push(historyElement[capteurIndex]['Valeur']);
                listValuesCapteur = listValuesCapteur.map(Number) // str -> int

                const capteur = lastCapteurs[capteurIndex]


                this.displayElement = this.createElement("li", capteur['Nom'])


                this.displayList.append(this.displayElement)

                this.temperature_name = this.createElement("p", "temperature_name")
                this.temperature_name.textContent = `Nom:${capteur['Nom']}`

                this.temperature_value = this.createElement("p", "temperature_value")
                this.temperature_value.textContent = `Valeur: ${capteur['Valeur']} °C`

                this.temperature_maximum = this.createElement("p", "temperature_maximum")
                this.temperature_maximum.textContent = `max :${Math.max.apply(Math, listValuesCapteur)}`

                this.temperature_minimum = this.createElement("p", "temperature_minimum")
                this.temperature_minimum.textContent = `min :${Math.min.apply(Math, listValuesCapteur)}`

                this.displayElement.append(
                    this.temperature_name,
                    this.temperature_value,
                    this.temperature_minimum,
                    this.temperature_maximum)

            }
        }
    }

    displayChart(history) {
        const lastCapteurs = history.slice(-1)[0];
        var chartLabel = ['date']
        var chartDate = []
        var chartValues = []


        if (lastCapteurs) {
            for (let capteurIndex = 0; capteurIndex < lastCapteurs.length; capteurIndex++) {
                chartLabel.push(lastCapteurs[capteurIndex]['Nom'])
                var valuesCapteur = []
                chartDate = []
                // récupère toutes les températures d'un capteur spécifique
                for (const Element of history) {
                    let date = new Date(Element[capteurIndex]['Timestamp'] * 1000)
                    chartDate.push(date.getHours() +
                        ":" + date.getMinutes())

                    valuesCapteur.push(Element[capteurIndex]['Valeur']);
                }
                valuesCapteur = valuesCapteur.map(Number) // str -> int
                chartValues.push(valuesCapteur)

            }

            var chartAll = []
            chartAll.push(chartLabel)

            for (let index = 0; index < chartDate.length; index++) {
                chartAll.push([chartDate[index], chartValues[0][index], chartValues[1][index]])
            }

            console.log(chartAll)

            this.chart = chartAll
            google.charts.load('current', {'packages': ['corechart']});
            google.charts.setOnLoadCallback(drawChart);
        }


        function drawChart() {
            var data = google.visualization.arrayToDataTable(app.view.chart);

            var options = {
                title: 'Evolution de la temperature dans le temps',
                curveType: 'function',
                legend: {position: 'bottom'}
            };

            var chart = new google.visualization.LineChart(app.view.graph);

            chart.draw(data, options);
        }
    }


    displayTab(history) {

        const lastCapteurs = history.slice(-1)[0];
        var chartLabel = ['date']
        var chartDate = []
        var chartValues = []


        if (lastCapteurs) {
            for (let capteurIndex = 0; capteurIndex < lastCapteurs.length; capteurIndex++) {
                chartLabel.push(lastCapteurs[capteurIndex]['Nom'])
                var valuesCapteur = []
                chartDate = []
                // récupère toutes les températures d'un capteur spécifique
                for (const Element of history) {
                    let date = new Date(Element[capteurIndex]['Timestamp'] * 1000)
                    chartDate.push(date.getHours() +
                        "h " + date.getMinutes() + "min")

                    valuesCapteur.push(Element[capteurIndex]['Valeur']);
                }
                valuesCapteur = valuesCapteur.map(Number) // str -> int
                chartValues.push(valuesCapteur)

            }

        }
        let trLabel = this.getElement('tr.label')
        let tbody = document.querySelector("tbody")
        //reset

        for (let i = 1; i < chartDate.length; i++) {
            this.removeChild(trLabel)
            this.removeChild(tbody)

        }
        //generate Label
        chartLabel.forEach(labelName => {
            let thlabel = document.createElement("th")
            thlabel.innerText = labelName
            trLabel.append(thlabel)
        })

        for (let i = 0; i < chartDate.length; i++) {
            let ligne = this.createElement("tr")
            let td = this.createElement("td")
            td.innerText = chartDate[i]
            ligne.append(td)

            for (let capteurIndex = 0; capteurIndex < lastCapteurs.length; capteurIndex++) {
                const tempValue = chartValues[capteurIndex][i]
                let element = this.createElement('td');
                element.innerText = tempValue + '°C'
                ligne.append(element)
            }
            tbody.append(ligne)

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

                } else if (parseInt(capteur.Valeur) <= 5) {
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

            setTimeout(this.NotificationTemp, 1200000);

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