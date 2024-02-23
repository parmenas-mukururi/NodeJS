import {addJsonData, newProduct, getProduct, updateProduct} from "./function.js";

import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });


//GET request
app.get("/api/products", async (req, res) => {
 res.status(200).json(await getProduct())
 res.end()
});


//POST request
app.post("/api/products", (req, res) => {
    const product = req.body; // {"productName": "", "productPrice": "", "productDescription": ""}
    newProduct(product)
    res.status(200).json(product);
    res.end();
})

//PUT request
app.put("/api/products/update", async (req, res) => {
    const product = req.body; 
    updateProduct(product)
    res.status(200).json(product);
    res.end();
})


addJsonData().then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
})
