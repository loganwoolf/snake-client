//entry point file

const connect = require('./client');
const host = process.argv[2] || 'localhost';
const port = +process.argv[3] || 8080;

console.log(`Connecting to ${host}:${port}`);
connect(host, port);

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};
const setupInput = (() => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
})();


//Information on Events for createConnection (an instance of class net.Socket)
// https://nodejs.org/api/net.html#class-netsocket