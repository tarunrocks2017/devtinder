const express = require("express");
const connectDb = require("./config/database");
const User = require("./models/user");
require("./config/database");

const app = express();

app.use(express.json())

// user signup api

app.post("/signup", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
    res.send("user created successfully");
    } catch (err) {
        res.send("error in user creation")
    }
});


// user finding api

app.get("/finduser", async (req, res) => {
    try {
        const user = await User.find({email:req.body.email});
        res.send(user)
    } catch( err ) {
        res.send("error in user finding")
    }
})

connectDb().then(() => {
  console.log("connection established successfyully");
  app.listen(3000, () => {
    console.log("app started at port 3000");
  });
}).catch(err => {
    console.log("error is connecting to database");
})

