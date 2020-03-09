const express = require("express");
const Tasks = require("./taskModel");
const router = express.Router();

router.get("/:id", (req, res) => {
  Tasks.get(req.params.id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({
        error: `Unable to fetch projects ${error.message}`
      });
    });
});

router.post("/", (req, res) => {
  Tasks.add(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(error => {
      res.status(500).json({
        error: `Unable to add project ${error.message}`
      });
    });
});

module.exports = router;