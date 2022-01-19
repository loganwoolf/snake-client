const net = require('net');

const host = process.argv[2];
const port = +process.argv[3];

const connect = () => {
  const conn = net.createConnection({
    host,
    port
  });
  conn.setEncoding('utf8');

  conn.on("connect", () => {
    console.log('Connected!');
  });

  conn.on("data", (incomingData) => {
    // runs when connection is first established
    console.log(`Server Message: ${incomingData}`);
  });

  return conn;
};
console.log(`Connecting to ${host}:${port}`);
connect();
