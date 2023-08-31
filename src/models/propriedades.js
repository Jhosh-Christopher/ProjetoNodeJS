class Propriedades {

    constructor(valorInicial) {
        this.propriedades = []

        if (valorInicial) {
            this.addPropriedade(valorInicial)
        }
    }

    addPropriedade(propriedade){
        if (isNaN(propriedade)) { 
            this.propriedades.push(propriedade.toLowerCase())
        }
    }

    getPropriedadesOrdenadas() {
        return this.propriedades.filter(propriedade => propriedade !== null).sort()
    }
}


module.exports = {Propriedades}