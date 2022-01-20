let connection;
const { stdout } = require("process");
// const { connect }  = require('./client.js');

// const conn = connect.conn;

const handleUserInput = (key) => {
  // ctrl c abort
  if (key === '\u0003') {
    process.exit();
  }

  const keyBinds = {
    w: 'up',
    a: 'left',
    s: 'down',
    d: 'right'
  };

  if (Object.keys(keyBinds).includes(key)) {
    connection.write(`Move: ${keyBinds[key]}`);
    console.log(`Move: ${keyBinds[key]}`);
  }
  
  const chats = {
    u: 'u r ded',
    y: 'u can\'t hide',
    l: 'l8er'
  };
  
  if (Object.keys(chats).includes(key)) {
    connection.write(`Say: ${chats[key]}`);
    console.log(`Say: ${chats[key]}`);
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput};