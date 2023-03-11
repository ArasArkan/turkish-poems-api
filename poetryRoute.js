import express from "express";
import bodyParser from "body-parser";
import { randomPoem } from "./controllers/poetryController.js"

const poetryRoute = express.Router();

poetryRoute.get('/random', randomPoem);

export default poetryRoute;