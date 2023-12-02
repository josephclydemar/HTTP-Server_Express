const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8700;
const DATABASE_URI = process.env.DATABASE_URI;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require(path.join(__dirname, 'routes', 'api', 'captured_images.js')));

mongoose.connect(
    DATABASE_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}`);
    });
}).catch(err => console.log(err.message));