import { CreateEmailResponse } from "./src/controllers/PromptController";

const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.post('/create-response', CreateEmailResponse);

server.listen(3000, () => console.log("listening to port 3000"))