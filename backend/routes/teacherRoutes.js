const express = require('express');
const router = express.Router();
const { addTeacher, getTeachers, updateTeacher, deleteTeacher } = require('../controllers/teacherController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, admin, addTeacher).get(protect, admin, getTeachers);
router.route('/:id').put(protect, admin, updateTeacher).delete(protect, admin, deleteTeacher);

module.exports = router;
