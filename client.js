const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
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

  return conn;
};



module.exports = {connect};