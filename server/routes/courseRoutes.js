import express from 'express';
import Course from '../models/course';

const router = express.Router();

router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

router.get('/courseDes/:id', async (req, res) => {
  try{
    const courseDetails = await Course.findById(req.params.id);
    res.json(courseDetails);
    if (!courseDetails) {
      return res.status(404).json({ error: 'CourseDetails not found' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error fetching course details'});
  }
});

export default router;
