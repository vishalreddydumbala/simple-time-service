const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const response = {
        timestamp: new Date().toISOString(),
        ip: ip
    };
    res.json(response);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});