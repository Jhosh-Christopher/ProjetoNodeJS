const prompt = require("prompt-sync")();

const { Propriedades } = require("../models/propriedades.js");

const propriedades = new Propriedades();

while (true) {
    const input = prompt("Digite as propiedades CSS ou 'sair' para finalizar: ");
    if (input.trim() === "") {
    console.log("Entrada vazia não é permitida.");
    continue;
    }
    if (input.toLowerCase() === "sair") {
    break;
    }
    propriedades.addPropriedade(input);
}

const propriedadesOrdenadas = propriedades.getPropriedadesOrdenadas();

console.log("Propriedades em ordem alfabética:");
for (let i = 0; i < propriedadesOrdenadas.length; i++) {
    console.log(`${i + 1}. ${propriedadesOrdenadas[i]}`);
}
