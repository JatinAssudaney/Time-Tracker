const mongoose = require("mongoose");
const { Schema } = mongoose;
const TopicSchema = require("./Topic");

const timerSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  tags: [TopicSchema],
  title: String,
  elapsedTime: Number,
  dateCreated: Date,
});

mongoose.model("timers", timerSchema);
