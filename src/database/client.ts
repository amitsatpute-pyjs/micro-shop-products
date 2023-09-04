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
  DATABASE_PORT_PG,
  DATABASE_USER_PG,
  DATABASE_PASSWORD_PG,
  USE_MYSQL
} = process.env;

const flag = parseInt(USE_MYSQL?USE_MYSQL:"1");
console.log("flag::", flag)
console.log("DATA::", DATABASE_HOST);
const config = knexStringcase({
  client: flag ? "mysql" : "pg",
  connection: {
    host: DATABASE_HOST,
    port: flag ? DATABASE_PORT : DATABASE_PORT_PG,
    database: DATABASE_NAME,
    user: flag ? DATABASE_USER : DATABASE_USER_PG,
    password: flag ? DATABASE_PASSWORD : DATABASE_PASSWORD_PG,
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
