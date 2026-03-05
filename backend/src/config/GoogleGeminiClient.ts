import { GoogleGenAI } from "@google/genai";

import dotenv from "dotenv"
dotenv.config()

const apiKey = process.env.GEMINI_SECRET_KEY;

export const client = new GoogleGenAI({
  apiKey
});

export const ClientResponse = async (input: any) => {
  const res = await client.models.generateContent({
    model: "gemini-3-flash-preview",
    ...input,
  });

  return res.text;
};