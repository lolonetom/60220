import fs from "fs";

export default class ProductManager {
  constructor(path) {
    this.products = [];
    this.idIncremental = 1;
    this.path = path;
  }

  /* Metodo para obtener array de todos los productos */
  async getProducts() {
    try {
      if (fs.existsSync(this.path)) {
        const productsJSON = await fs.promises.readFile(this.path, "utf-8");
        this.products.splice(0, this.products.length);
        this.products.push(...JSON.parse(productsJSON));
        return this.products;
      } else {
        return this.products;
      }
    } catch (error) {
      console.log(error);
    }
  }

  /* Metodo para obtener */
  async getProductById(id) {
    try {
      const products = await this.getProducts();
      const product = this.products.find((p) => p.id === id);
      if (!product) throw new Error(`No se encontro el producto con ID ${id}`);
      return product;
    } catch (error) {
      console.log("Not Found");
    }
  }

  /* Metodo para agregar productos */
  addProducts(title, description, price, thumbnail, code, stock) {
    const validarCode = this.products.find((product) => product.code === code);
    if (validarCode) {
      console.log("Ya existe un producto con el mismo codigo");
    } else {
      const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: this.idIncremental,
      };
      this.products.push(product);
      this.idIncremental++;
    }
  }
}

const test = async () => {
  await productManager.addProduct(
    "producto prueba1",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    10
  );
  await productManager.addProduct(
    "producto prueba2",
    "Este es un producto prueba",
    300,
    "Sin imagen",
    "abc1234",
    10
  );
  await productManager.addProduct(
    "producto prueba1",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    10
  );

  await productManager.getProductById(2);
};

test();
