import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql",
    connection: {
      host: DATABASE_HOST,
      port: DATABASE_PORT ? parseInt(DATABASE_PORT) : 3306,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default config;
