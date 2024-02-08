import express from 'express';

const router = express.Router();


let food = [
    { name: 'Pizza', price: 50 },
    { name: 'Banana', price: 40 },
    { name: 'Soda', price: 10 },
    { name: 'Ensalada', price: 20 },
    { name: 'Hamburguesa', price: 20 },
];

router.get('/user', (req, res) => {
    let testUser = {
        name: 'Hilda',
        last_name: 'Martinez',
        role: 'admin'
    }
    res.render('index',
        {
            user: testUser,
            isAdmin: testUser.role === 'admin', food
        })
})


export default router