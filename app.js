const verificarMotor = require("./motor");
const verificarTemperatura = require("./sensores");

console.log("=================================");
console.log("      PROJETO VULCAN");
console.log(" PAINEL DE TELEMETRIA INDUSTRIAL");
console.log("=================================");

console.log(verificarMotor(80, 25));

console.log(
    verificarTemperatura([65, 72, 75, 68, 70])
);

console.log("=================================");
