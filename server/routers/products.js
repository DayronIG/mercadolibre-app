
const express = require('express');
const { searchForId, searchItemsModel } = require('../controllers/products');

const router = express.Router();

router.route('/').get(searchItemsModel);

router.route('/:id').get(searchForId);

module.exports = router;
