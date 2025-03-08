const express = require('express');
const multer = require('multer');
const Project = require('../models/Project');
const router = express.Router();

// Multer Configuration for File Uploads
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// POST Route — Upload Project
router.post('/upload', upload.single('file'), async (req, res) => {
    const { title, description } = req.body;
    const filePath = `/uploads/${req.file.filename}`;

    try {
        const newProject = new Project({ title, description, file: filePath });
        await newProject.save();
        res.status(201).json({ message: 'Project uploaded successfully!', project: newProject });
    } catch (err) {
        res.status(500).json({ error: 'Failed to upload project' });
    }
});

// GET Route — Retrieve All Projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

module.exports = router;
