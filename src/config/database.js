const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  mongoose
    .connect(
      process.env.MONGO_URL    );
}

module.exports = connectDb;
