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
        const user = await  User.find({email:req.body.email});
        res.send(user)
    } catch( err ) {
        res.send("error in user finding")
    }
});

//feed api

app.get("/feed",async (req,res) => {
    try {
        const userData = await User.find({});
        res.send(userData);
    } catch (err) {
        res.send("somethig went wrong");
    }
});

// delete api

app.delete("/deleteUser", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.body.userId,{lean:true});
        console.log(deletedUser);
        res.send(deletedUser);
    } catch(err) {
        res.send("something went wrong in deletion")
    }
})

// update api

app.put("/updateUser", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate()
    } catch(err) {
        res.send("something went wrong while updating")
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

