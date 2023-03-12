import knex from "../../../database/client";
import { AddProduct, UpdateProduct } from "../../../boundary/products";

export async function listProducts(): Promise<any> {
  const products = await knex("products").select("*").from("products");
  return {
    message: "Successful",
    data: products,
  };
}

export async function productById(id: string): Promise<any> {
  const product = await knex("products")
    .select("*")
    .from("products")
    .where("id", "=", id);

  return {
    message: product.length > 0 ? "Product found" : "Product not found",
    data: product[0],
  };
}

export async function addProduct(productObj: AddProduct): Promise<any> {
  try {
    const data = await knex("products").insert(productObj).returning("*");
    return {
      message: "order generated",
      data: data,
    };
  } catch (e: any) {
    console.log(e);
    return {
      error: e.message,
      data: null,
    };
  }
}

export async function updateProduct(
  productId: string,
  productObj: UpdateProduct
): Promise<any> {
  try {
    const data = await knex("products")
      .where("id", "=", productId)
      .update(productObj)
      .returning("*");
    return {
      message: "Record updated",
      data: data,
    };
  } catch (e: any) {
    console.log(e);
    return {
      error: e.message,
      data: null,
    };
  }
}

export async function deleteProduct(productId: string): Promise<any> {
  try {
    const data = await knex("products").where("id", "=", productId).del();
    return {
      message: data > 0 ? "Product deleted" : "Product not found",
      data: { productId: data > 0 ? productId : null },
    };
  } catch (e: any) {
    console.log(e);
    return {
      error: e.message,
      data: null,
    };
  }
}
