const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Timer = mongoose.model("timers");
const User = mongoose.model("users");

module.exports = (app) => {
  app.get("/api/timers", requireLogin, async (req, res) => {
    const user = req.user;
    try {
      const timers = await Timer.find({ _user: user }).sort({
        dateCreated: -1,
      });
      if (timers.length === 0) {
        res.send([]);
      } else {
        res.send(timers);
      }
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.get("/api/timers/:id", requireLogin, async (req, res) => {
    const user = req.user;
    try {
      const { id } = req.params;
      const timers = await Timer.find({ _user: user, _id: id });
      if (timers) {
        res.send({});
      } else {
        res.send(timers);
      }
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.post("/api/timers", requireLogin, async (req, res) => {
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

  app.put("/api/timers/:id", requireLogin, async (req, res) => {
    try {
      const { id } = req.params;
      const { title, elapsedTime, tags } = req.body;
      const timer = await Timer.findById(id);
      if (timer) {
        timer.title = title;
        timer.elapsedTime = elapsedTime;
        timer.tags = tags;
      }
      await timer.save();
      res.send({});
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.put("/api/timers/edit/:id", requireLogin, async (req, res) => {
    try {
      const { id } = req.params;
      const { title, tags } = req.body;
      const timer = await Timer.findById(id);
      if (timer) {
        timer.title = title;
        timer.tags = tags.split(",").map((tag) => {
          return { topicName: tag.trim() };
        });
      }
      await timer.save();
      res.send({});
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.delete("/api/timers/delete/:id", requireLogin, async (req, res) => {
    try {
      const { id } = req.params;
      const timer = await Timer.findById(id);
      if (timer) {
        await timer.remove();
      }
      res.send({ message: "Timer removed" });
    } catch (error) {
      res.send({ error: error.message });
    }
  });
};
