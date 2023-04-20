import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config);

router.route("/").get(( req, res ) => {

  res.status(200).json({ message:"Dalle 1" })

})

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
     prompt: prompt,
     n: 1,
     size: "1024x1024",
     response_format: "b64_json"
    })

    const img = response.data.data[0].b64_json

    res.status(200).json({ photo: img })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "the dev who made this SUCK !" })
  }
})

export default router
