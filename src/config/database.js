const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(
      "mongodb+srv://tarunwork640:xd08TtEMIM4Ye2US@nodeth.zv6ib2g.mongodb.net/devTinder"
    );
}

module.exports = connectDb;
