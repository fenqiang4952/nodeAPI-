
const WebSocket = require('ws')

const WebSocketServer = WebSocket.Server

const wss = new WebSocketServer({
  port: 3000
})

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
    setTimeout(function() {
      ws.send(`123`, (err) => {
        if (err) {
            console.log(`[SERVER] error: ${err}`);
        }
      });
    }, 5000);
})

let ws = new WebSocket('ws://localhost:3000/test')
ws.on('open', function () {
  console.log(`[CLIENT] open()`);
  ws.send('Hello22!');
})
ws.on('message', function (message) {
  console.log(`[CLIENT] Received: ${message}`);
})