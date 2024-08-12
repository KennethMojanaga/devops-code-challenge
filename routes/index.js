const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  	res.send({
		name: 'DEVOPS-API',
		message: 'Welcome to the DEVOPS-API'
	});
});

module.exports = router;
