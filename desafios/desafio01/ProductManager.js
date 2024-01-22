class ProductManager {

    constructor() {
        this.products = [];
        this.idIncremental = 1;
    }
    /* Metodo para agregar productos */
    addProducts(title, description, price, thumbnail, code, stock) {

        const validarCode =
            this.products.find((product) => product.code === code);
        if (validarCode) {
            console.log('Ya existe un producto con el mismo codigo');
        } else {
            const product = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id: this.idIncremental
            };
            this.products.push(product);
            this.idIncremental++;
        }
    }

    /* Metodo para obtener array de todos los productos */
    getProducts() {
        return this.products;
    }

    /* Metodo para obtener */
    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
            return product;
        } else {
            console.log("Not Found");
        }
    }
}



const productManager = new ProductManager();
productManager.addProduct('producto prueba1', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 10);
productManager.addProduct('producto prueba2', 'Este es un producto prueba', 300, 'Sin imagen', 'abc1234', 10);
console.log(productManager.getProduct());
productManager.addProduct('producto prueba1', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 10);
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));