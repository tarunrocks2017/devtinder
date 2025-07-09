const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(
      "mongodb+srv://tarunwork640:<password>@nodeth.zv6ib2g.mongodb.net/devTinder"
    );
}

module.exports = connectDb;
