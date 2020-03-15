const express = require('express');
const Resources = require('./resourceModel');
const router = express.Router();

router.get('/', (req, res) => {
  Resources.get()
  .then(resource => {
    res.status(200).json(resource);
  })
  .catch(error => {
    res.status(500).json({
      error: `Unable to fetch projects ${error.message}`
    })
  })
});

router.post('/', (req, res) => {
  Resources.add(req.body)
  .then(resource => {
    res.status(201).json(resource)
  })
  .catch(error => {
    res.status(500).json({
      error: `Unable to add project ${error.message}`
    })
  })
});

module.exports = router;