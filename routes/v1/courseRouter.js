import express from 'express';
import { createCourse, getCourseList, updateCourse } from '../../controllers/courseController.js';

const router = express.Router()

router.get('/courseList', getCourseList);
router.post('/create', createCourse);
router.put('/update/:id', updateCourse);
router.delete('/delete')

export default router;