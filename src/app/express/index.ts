import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import { apiDoc } from "./openapi/products-api";

dotenv.config();
const port = process.env.PORT || 8082;

const app = express();
app.use("/docs", swaggerUi.serve, swaggerUi.setup(apiDoc));
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () =>
  console.log(`Products microservice listening on port ${port}!`)
);
