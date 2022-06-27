const os = require("os");

let cpu = os.cpus();
let totalMemory = os.totalmem();

console.log(cpu);
console.log(`Total Memory: ${totalMemory}`);
