const express = require('express');
const router = express.Router();
const { createResult, getResults, updateResult, deleteResult } = require('../controllers/resultController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, admin, createResult).get(protect, getResults);
router.route('/:id').put(protect, admin, updateResult).delete(protect, admin, deleteResult);

module.exports = router;
