const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    imageUrl: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('temp', testSchema);