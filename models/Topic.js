const mongoose = require("mongoose");
const { Schema } = mongoose;

const topicSchema = new Schema({
  topicName: String,
});

module.exports = topicSchema;
