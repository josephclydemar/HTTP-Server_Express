
const path = require('path');
const CapturedImagesModel = require(path.join(__dirname, '..', 'models', 'CapturedImages.js'));


const getAllCapturedImages = async (req, res) => {
    try {
        const capturedImages = await CapturedImagesModel.find({}).sort({ createdAt: -1 });
        res.json( capturedImages );
        return;
    } catch (err) {
        res.json({ message: err.message });
        return;
    }
};

module.exports = { getAllCapturedImages };