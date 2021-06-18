const { Router } = require('express');

const Participant = require('../models/Participant');

const router = Router();

router.get('/', async (req, res) => {
  const participants = await Participant.getAll();
  res.status(200).json(participants);
});


module.exports = router;