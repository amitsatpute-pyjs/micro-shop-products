import {
  addProduct,
  deleteProduct,
  listProducts,
  productById,
  updateProduct,
} from "../../../core/services/products";
import { NextFunction, Response, Request } from "express";

export async function addNewProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const body = { ...req.body, categories: JSON.stringify(req.body.categories) };
  const data = await addProduct(body);
  res.json(data);
}

export async function getProductsList(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await listProducts();
  res.json(data);
}

export async function getProductById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const product = await productById(req.params.id);
  res.json(product);
}

export async function deleteProductById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const product = await deleteProduct(req.params.id);
  res.json(product);
}

export async function updateProductById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const body = { ...req.body, categories: JSON.stringify(req.body.categories) };
  const productId = req.params.id;
  const data = await updateProduct(productId, body);
  res.json(data);
}
