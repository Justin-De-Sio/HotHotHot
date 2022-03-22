class SensorView {
    displayDataByConsole(data) {
        console.log("nouvelle temperature : " + data)
    }

    displayHistory(history) {
        console.log(history)
    }

    displayLastData(history) {

        const lastCapteursData = history.slice(-1)[0];
        if (lastCapteursData) {
            for (let i = 0; i < lastCapteursData.length; i++) {


                this.listValuesCapteur=[]
                for (let j = 0; j < history.length; j++) {
                    this.listValuesCapteur.push(history[j][i].Valeur);
                }
                this.listValuesCapteur = this.listValuesCapteur.map(Number)

                let capteur = lastCapteursData[i]
                console.log(`Nom:${capteur.Nom} ; Valeur: ${capteur.Valeur} degree ; min :${Math.min.apply(Math, this.listValuesCapteur)}; max :${Math.max.apply(Math, this.listValuesCapteur)}`)

            }

        }

    }

}
