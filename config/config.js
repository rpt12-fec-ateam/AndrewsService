require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_Username,
    "password": process.env.DB_Password,
    "database": process.env.DB_Name,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_Username,
    "password": process.env.DB_Password,
    "database": process.env.DB_Name,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_Username,
    "password": process.env.DB_Password,
    "database": process.env.DB_Name,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
