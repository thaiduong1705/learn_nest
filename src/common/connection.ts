export const connection = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
};

export type Connection = typeof connection;