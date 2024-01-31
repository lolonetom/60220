import express from 'express';

const app = express();
const PORT = 8080;

app.get('/saludo', (req, res) => {
    res.send('Hola desde server con express!!')
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})