// routes/courseRoutes.js
import express from 'express';
import Course from '../models/course';

const router = express.Router();

// Route to fetch all courses
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

export default router;
