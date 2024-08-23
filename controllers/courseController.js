import { Course } from "../routes/models/courseModel.js";

export const getCourseList = async (req, res, next) => {
    try {
        const courseList = await Course.find();

        res.json({ success: true, message: "Fetched course list", data: courseList });

    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
}

export const createCourse = async (req, res, next) => {
    try {
        const { title, desc, image, duration, instructor } = req.body;
        const newCourse = new Course({ title, desc, image, duration, instructor });
        await newCourse.save();

        res.json({ success: true, message: "New course created successfully", data: newCourse });

    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
}

export const updateCourse = async (req, res, next) => {
    try {
        const { title, desc, image, duration, instructor } = req.body;
        const { id } = req.params;
        const updatedCourse = await Course.findByIdAndUpdate(id, { title, desc, image, duration, instructor }, { new: true });
        res.json({ success: true, message: "Course updated", data: updatedCourse });

    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
}