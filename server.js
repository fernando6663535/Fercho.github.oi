const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let receivedData = [];

app.use(bodyParser.json());

app.post('/receive-data', (req, res) => {
    const data = req.body;
    const forwardedFor = req.headers['x-forwarded-for'];
    const playerIp = forwardedFor ? forwardedFor.split(',')[0].trim() : req.connection.remoteAddress;
    data.ip = playerIp;
    console.log('Datos recibidos:', data);

    const index = receivedData.findIndex(d => d.id === data.id);
    if (index >= 0) {
        receivedData[index] = data;
    } else {
        receivedData.push(data);
    }

    res.json({ message: 'Datos recibidos correctamente' });
});

app.get('/data', (req, res) => {
    res.json(receivedData);
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
