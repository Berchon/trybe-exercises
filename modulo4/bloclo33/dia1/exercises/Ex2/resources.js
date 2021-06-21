const os = require('os');

console.log(`Plataforma: ${os.platform()}`);
console.log(`Versão: ${os.release()}`);
console.log(`Arquitetura: ${os.arch()}`);
console.log();

const cpus = os.cpus();
console.log(`CPU ${cpus.length} cores:`);
console.log();

cpus.forEach((core, index) => {
  console.log(`Core ${index + 1} - Modelo: ${core.model} | Velocidade ${core.speed / 1000}GHz`);
});
console.log();


console.log(`Memória total: ${os.totalmem() / 1024 / 1024 / 1024}GB`)
