require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "algorism",
    database: "graphql_api",
    host: "127.0.0.1",
    dialect: "postgres",
    // use_env_variable: "DEV_DATABASE_URL",
  },
  test: {
    username: "postgres",
    password: "algorism",
    database: "graphql_api",
    host: "127.0.0.1",
    dialect: "postgres",
    // use_env_variable: "TEST_DATABASE_URL",
  },
  production: {
    username: "postgres",
    password: "algorism",
    database: "graphql_api",
    host: "127.0.0.1",
    dialect: "postgres",
    // use_env_variable: "DATABASE_URL",
  },
};
