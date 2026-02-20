import os from 'node:os';

console.log('Operating System Info:');
console.log(`Platform: ${os.platform()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Number of CPUs: ${os.cpus().length}`);
console.log(`Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Home Directory: ${os.homedir()}`);
console.log(`Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Temporary Directory: ${os.tmpdir()}`);
console.log(`Endianness: ${os.endianness()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`OS Type: ${os.type()}`);
console.log('End of OS Info');
