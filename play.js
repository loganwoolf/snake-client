//entry point file

const {connect} = require('./client');
const { setupInput } = require('./input');

// const host = process.argv[2] || 'localhost';
// const port = +process.argv[3] || 8080;

// console.log(`Connecting to ${host}:${port}`);


setupInput(connect());


//Information on Events for createConnection (an instance of class net.Socket)
// https://nodejs.org/api/net.html#class-netsocket