const express = require("express");
const Tasks = require("./taskModel");
const router = express.Router();


// this router end-point retrieves a list of tasks
router.get("/:id", (req, res) => {
  Tasks.get(req.params.id) //using the get method helper in this endpoint 
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({
        error: `Unable to fetch projects ${error.message}`
      });
    });
});

// this router end-point adds a task to the task table
router.post("/", (req, res) => {
  Tasks.add(req.body) //using the add method helper in this endpoint
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