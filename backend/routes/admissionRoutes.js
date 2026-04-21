const express = require('express');
const router = express.Router();
const { submitAdmission, getAdmissions, updateAdmissionStatus, deleteAdmission } = require('../controllers/admissionController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(submitAdmission).get(protect, admin, getAdmissions);
router.route('/:id').put(protect, admin, updateAdmissionStatus).delete(protect, admin, deleteAdmission);

module.exports = router;
