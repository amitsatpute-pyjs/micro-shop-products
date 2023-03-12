import knex from "./client.js";
import MockProducts from "./mockProducts.js";

// const knex = require("./client")

async function insertData() {
  await knex("products").insert(MockProducts);
  console.log("products added");
  knex.destroy();
}

insertData();
