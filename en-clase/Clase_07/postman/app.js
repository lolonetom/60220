import express from 'express';


const app = express()
const PORT = 8080;

//Middleware POSTMAN
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Endpoints
app.get('/ping', (req, res) => {
    res.send('Hola desde server con express!!')
})

//Simulamos una DB
let users = []

app.get('/api/users', (req, res) => {
    res.send(users);
})
app.post('/api/user', (req, res) => {
    console.log(req.body);
    let user = req.body

    //asignar un id
    const numRandom = Math.floor(Math.random() * 100 + 1)
    user.id = numRandom

    if (!user.first_name || !user.last_name) {
        return res.status(400).send({ status: 'error', msg: "Faltan datos" })
    }
    users.push(user)
    res.send({ status: 'Success', msg: 'Usuario creado!!' })
})

//Actualizar datos
app.put('/api/users/:userId', (req, res) => {
    //capturo id
    let userId = parseInt(req.params.userId)
    //capturo info del req.body
    let userUpdate = req.body

    const userPosition = users.findIndex((u => u.id === userId));

    if (userPosition < 0) {
        return res.status(202).send({ status: 'info', error: 'Usuario no encontrado' });
    }
    users[userPosition] = userUpdate;
    res.send({ status: 'Success', msg: 'Usuario Actualizado', data: users[userPosition] });
})


app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})