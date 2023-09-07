class DataActual{

    static configLanguage = "PT-BR";
    static configTime = {
        hour: "2-digit",
        minute: "2-digit"
    };

    static getFormatDate() {
        let date = new Date();
        return date.toLocaleDateString(this.configLanguage, this.configTime);
    }
}



console.log(DataActual.getFormatDate())