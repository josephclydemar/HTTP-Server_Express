const path = require('path');
const express = require('express');

const CapturedImagesController = require(path.join(__dirname, '..', '..', 'controllers', 'capturedImagesController.js'));
const router = express.Router();


router.route('/captured_images').get(CapturedImagesController.getAllCapturedImages);

module.exports = router;