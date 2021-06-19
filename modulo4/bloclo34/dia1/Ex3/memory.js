const os = require('os');

setInterval(() => {
  const totalMemory = os.totalmem() / 1024 / 1024;
  const freeMemory = os.freemem() / 1024 / 1024;

  const usedMemory = (totalMemory - freeMemory).toFixed(2);

  console.log(`Uso de memória: ${usedMemory}/${totalMemory}MB`);
}, 1000);
