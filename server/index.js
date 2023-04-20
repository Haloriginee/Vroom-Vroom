import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import dalle1 from "./routes/dalle.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limig: "50mb" }))

app.use("/api/v1/dalle", dalle1)

app.get("/", (req, res) => {
  res.status(200).json({ message: "Pimp My Ride !!" })
})

app.listen(8080, () => console.log("server on 8080"))
