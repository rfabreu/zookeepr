const { json } = require('body-parser');
const express = require('express');
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;

const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// instructs the server to use the specified routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// instructs the server to serve additional resources (css, js, images) with the html file
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
