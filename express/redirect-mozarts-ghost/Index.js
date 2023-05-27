import express from "express";
import cors from "cors";
import { getRedirect } from "./src/getRedirect/index.js";

const app = express();
app.use (express.json()); 
app.use(cors());
const PORT = 3000;

app.get("/redirect/:id", getRedirect);

app.listen(3000, () => { 
  console.log(`Server running on port ${PORT}`);
} );