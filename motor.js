function verificarMotor(velocidadeAtual, aceleracao) {
    let velocidadeFinal = velocidadeAtual + aceleracao;

    if (velocidadeFinal <= 100) {
        return Velocidade Final: ${velocidadeFinal} km/h - Sistema Seguro;
    } else {
        return Velocidade Final: ${velocidadeFinal} km/h - ALERTA DE SOBRECARGA;
    }
}

module.exports = verificarMotor;
