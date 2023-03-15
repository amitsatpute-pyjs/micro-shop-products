import { Router } from "express";
import products from "./products";

const router = Router();

const baseURL = "/";
router.use(baseURL, products);

export { router };
