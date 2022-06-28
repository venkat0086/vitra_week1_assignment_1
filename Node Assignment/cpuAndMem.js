// const os = require("os");

// let cpu = os.cpus();
// let totalMemory = os.totalmem();

// console.log(cpu);
// console.log(`Total Memory: ${totalMemory}`);

let pidusage = require("pidusage");

const cp = require("child_process");

const child = cp.spawn("ls", ["-lh", "/usr"]);

pidusage(child.pid, function (err, stats) {
  console.log(stats);
});
