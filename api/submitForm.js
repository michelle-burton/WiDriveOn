// reCaptcha
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();


router.post('/submitForm', async (req, res) => {
    const { userFirstName, userLastName, userZipCode, 'g-recaptcha-response': recaptchaToken } = req.body;

    // Verify reCAPTCHA token
    const secretKey = '6Lft5OwqAAAAAFEgF_qFuZgZ3xycTwveaIHAy3lN';
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    const response = await fetch(verificationUrl, { method: 'POST' });
    const data = await response.json();

    if (data.success) {
        console.log("success: reCAPTCHA")
        // reCAPTCHA verified successfully
        // Process the form data
        res.status(200).send('Form submitted successfully');
    } else {
        // reCAPTCHA verification failed
         console.log("Failed: reCAPTCHA")
        res.status(400).send('reCAPTCHA verification failed');
    }
});

module.exports = router;