import fsPromise from "fs/promises";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const addJsonData = async () => {
  try {
    //create a folder if it doesn't exist
    if (!fs.existsSync(path.join("src", "data"))) {
      await fsPromise.mkdir(path.join("src", "data"));
      console.log("folder created successfully");
    }
    //create a file if it doesn't exist
    if (!fs.existsSync(path.join("src", "data", "productsData.json"))) {
      await fsPromise.appendFile(
        path.join("src", "data", "productsData.json"),
        "[]"
      );
      console.log(`file created successfully`);
    }
  } catch (err) {
    console.error(err);
  }
};



const getProduct = async () => {
  const file = await fsPromise.readFile(
    path.join("src", "data", "productsData.json"),
    { encoding: "utf8" }
  );
  const products = JSON.parse(file);
  console.log(products);
  return products;
}

//adding a new product
const newProduct = async (product) => {
  product.productId = uuidv4();
  const file = await fsPromise.readFile(
    path.join("src", "data", "productsData.json"),
    { encoding: "utf8" }
  );
  const products = JSON.parse(file);
  console.log(products);
  products.push(product);
  await fsPromise.writeFile(
    path.join("src", "data", "productsData.json"),
    JSON.stringify(products)
  );
  console.log(`data appended successfully`);
};


//updating an existing product
const updateProduct = async (product) => {
  const products = await getProduct()
  const index = products.findIndex((product) => {
    return product.productId === products.productId
  })
  if(index !== -1) {
    throw new Error(`product updated successfully`)
  }
  products[index] = product;

  await fsPromise.writeFile(
    path.join("src", "data", "productsData.json"),
    JSON.stringify(products)
  );
  console.log(`data updated successfully`);
}

export { addJsonData, newProduct, getProduct, updateProduct}