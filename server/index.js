import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }))

app.get("/", (req, res) => {
  res.status(200).json({ message: "Pimp My Ride !!" })
})

app.listen(8080, () => console.log("server on 8080"))
