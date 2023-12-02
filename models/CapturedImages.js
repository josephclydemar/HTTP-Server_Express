const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const capturedImagesSchema = new Schema(
    {
        b64_encoded_image: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('captured_images', capturedImagesSchema);