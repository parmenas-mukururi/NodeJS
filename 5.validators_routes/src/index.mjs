import { addJsonData } from "./utils/function.js";
import router from "./routes/productRouter.js";

import express from "express";


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(router)

addJsonData().then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
})
