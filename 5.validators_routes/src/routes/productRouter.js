import { newProduct, getProduct, updateProduct } from "../utils/function.js";
import { Router } from "express";
import { schema } from "../utils/validationSchema.js";
import { matchedData, validationResult, checkSchema } from "express-validator";

const router = Router();

//GET request
router.get("/api/products",  async (req, res) => {
  res.status(200).json(await getProduct());
  res.end();
});

//POST request
router.post("/api/products", checkSchema(schema), async (req, res) => {
   
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const product = matchedData(req); // {"productName": "", "productPrice": "", "productDescription": ""}
  await newProduct(product);
  res.status(200).json(product);
  res.end();
});

//PUT request
router.put("/api/products/update", async (req, res) => {

 await updateProduct(product);
  res.status(200).json(product);
  res.end();
})

export default router;
