require('dotenv').config();
const express = require('express');
const app = express();
const submitForm = require('./api/submitForm');

app.use(express.json());
app.use('/api', submitForm);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});