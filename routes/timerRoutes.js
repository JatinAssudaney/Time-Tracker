const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Timer = mongoose.model("timers");
const User = mongoose.model("users");

module.exports = (app) => {
  app.get("/api/timers", async (req, res) => {
    try {
      const timers = await Timer.find({}).sort({ dateCreated: -1 });
      if (timers.length === 0) {
        res.send([]);
      } else {
        res.send(timers);
      }
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.post("/api/timers", async (req, res) => {
    try {
      const { title, tags } = req.body;
      const timer = await new Timer({
        title,
        elapsedTime: 0,
        tags: tags.split(",").map((tag) => {
          return { topicName: tag.trim() };
        }),
        _user: req.user.id,
        dateCreated: Date.now(),
      }).save();
      res.send({});
    } catch (error) {
      res.send({ error: error.message });
    }
  });
};
