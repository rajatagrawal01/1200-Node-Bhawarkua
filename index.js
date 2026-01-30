const fs=require('fs');
const os = require('os')

/// Get the CPU architecture
// console.log('CPU Architecture:', os.arch());

// // Get the amount of free system memory in bytes
console.log('Free Memory (bytes):', os.freemem());

// // Get the path to the current user's home directory
// console.log('Home Directory:', os.homedir());

// // Get the hostname of the operating system
// console.log('Hostname:', os.hostname());

// // Get information about network interfaces
// console.log('Network Interfaces:', os.networkInterfaces());

// // Get the operating system platform (e.g., 'linux', 'darwin', 'win32')
console.log('OS Platform:', os.platform());

// // Get the operating system release
// console.log('OS Release:', os.release());

// // Get the total amount of system memory in bytes
// console.log('Total Memory (bytes):', os.totalmem());

// // Get the system uptime in seconds
console.log('System Uptime (seconds):', os.uptime());

// // Get information about each CPU/core
console.log('CPU Information:', os.cpus().length);

// console.log(os.cpus());
