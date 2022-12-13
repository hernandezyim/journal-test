const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World! 0011')
})

export default router;