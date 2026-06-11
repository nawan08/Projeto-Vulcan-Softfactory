function verificarTemperatura(leituras) {
    let soma = 0;

    for (let i = 0; i < leituras.length; i++) {
        soma += leituras[i];
    }

    let media = soma / leituras.length;

    if (media > 70) {
        return Média Térmica: ${media.toFixed(1)}°C - Ligar Resfriamento;
    } else {
        return Média Térmica: ${media.toFixed(1)}°C - Temperatura Normal;
    }
}

module.exports = verificarTemperatura;
