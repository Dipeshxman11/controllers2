const express = require('express');
const app = express();
const path = require('path');

const loginRoutes = require('./login');
const sendRoutes = require('./send');
const contactUsRoutes = require('./contactUs');

const successController = require('./controllers/success'); // Import the success controller

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRoutes);
app.use('/', sendRoutes);
app.use('/contact', contactUsRoutes);

app.get('/success', successController.getSuccess); // Use the getSuccess function from the success controller

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4300);
