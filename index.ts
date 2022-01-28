import { sequelize } from "./db";
import { Product } from "./db/product";

import * as express from "express";

const app = express();
const port = process.env.PORT || 3000;

// para parsear el body
app.use(express.json());

// método para obtener todos los productos

app.get("/products", async (req, res) => {
  // para evitar usar el then() usamos el async y await
  const allProducts = await Product.findAll();
  res.send(allProducts);
});

// método para crear un producto nuevo

app.post("/products", async (req, res) => {
  // lo que me pasen en el body lo voy a usar como parametro para crear el producto
  const product = await Product.create(req.body);
  res.send(product);
});

// método para obtener un solo producto con su id

app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const productById = await Product.findByPk(productId);
  res.send(productById);
});

// método para modificar un producto

app.patch("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  // modificamos el título y la cantidad con el objeto que le paso por body del producto que tenga el mismo id que me pasen por parámetro
  await Product.update(req.body, {
    where: {
      id: productId,
    },
  });
  // guardo en una variable el producto ya modificado
  const modifiedProduct = await Product.findByPk(productId);
  res.send(modifiedProduct);
});


// para eliminar un producto por su id
app.delete("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  // eliminamos el producto que tenga el id que me pasan
  await Product.destroy({
    where: {
      id: productId,
    },
  });
  res.send(`El producto con el id: ${productId} ha sido eliminado`);
});

app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`);
});
