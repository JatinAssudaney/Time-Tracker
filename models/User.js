const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  profileName: String,
});

mongoose.model("users", userSchema);
