exports.DBConfig = {

  "development": {
    "dbName": "bnb_development",
    "user": process.env.USER,
    "password": null,
    "options": {
      "dialect": "postgres",
      "port": "5432"
    }
  },

  "test": {
    "dbName": "bnb_test",
    "user": process.env.USER,
    "password": null,
    "dialectOption": 'postgres',
    "options": {
      "dialect": "postgres",
      "port": "5432"
    }

  },

};
