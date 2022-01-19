const net = require('net');

const host = process.argv[2];
const port = +process.argv[3];

const connect = () => {
  const conn = net.createConnection({
    host,
    port
  });
  conn.setEncoding('utf8');

  conn.on("connect", (incomingData) => {
    console.log('Connected!');
    incomingData && console.log(`Connect Message: ${incomingData}`);
  });

  conn.on("data", (incomingData) => {
    // runs when connection is first established
    console.log(`Server Message: ${incomingData}`);
  });

  return conn;
};
console.log(`Connecting to ${host}:${port}`);
connect();

//Information on Events for createConnection (an instance of class net.Socket)
// https://nodejs.org/api/net.html#class-netsocket