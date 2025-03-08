const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    file: { type: String, required: true }, // File URL for blueprints, images, etc.
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
