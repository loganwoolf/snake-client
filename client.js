const net = require('net');

const connect = (host, port) => {
  const conn = net.createConnection({
    host,
    port
  });
  conn.setEncoding('utf8');

  conn.on("connect", (incomingData) => {
    console.log('Connected!');
    incomingData && console.log(`Connect Message: ${incomingData}`);

    conn.write("Name: L_W");


  });

  conn.on("data", (incomingData) => {
    // runs when connection is first established
    console.log(`Server Message: ${incomingData}`);
  });

  return {conn, host, port};
};

module.exports = {connect};