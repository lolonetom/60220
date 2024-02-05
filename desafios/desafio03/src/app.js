import express from 'express';
import ProductManager from './ProductManager.js';
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productManager = new ProductManager('./productos.json');

app.get('/products', async (req, res) => {
    try {
        const { cant } = req.query;
        const products = await productManager.getProducts();
        if (cant <= products.length) {
            const limitProducts = products.splice(0, cant);
            res.json(limitProducts)
        } else {
            res.status(400).json({ message: `El limite (${cant}) es mayor que el numero de producto (${products.length})` })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
})

app.get('/products/:pid', async (req, res) => {
    try {
        const { pid } = req.params;
        const product = await productManager.getProductById(Number(pid));

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product not found" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})