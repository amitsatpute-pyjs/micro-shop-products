import Knex from "knex";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import knexStringcase from "knex-stringcase";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

console.log("DATA::", DATABASE_HOST);
const config = knexStringcase({
  client: "mysql",
  connection: {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    database: DATABASE_NAME,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    typeCast: function (field: any, next: any) {
      if (field.type === "JSON") {
        return JSON.parse(field.string());
      }
      return next();
    },
  },
  migrations: {
    directory: "src/database/migrations",
  },
  seeds: {
    directory: "src/database/seeds",
  },
});

export default Knex(config);
