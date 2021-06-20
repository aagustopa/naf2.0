const express = require('express');
const app = express();
// const cors = require('cors');
require('dotenv').config();

// app.use(cors());

// body json
// app.use(express.json({ limit: '50mb', extended: true }));
// body, input html
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/users', require('./routes/userRoutes'));

app.listen(process.env.PORT, function() {
    console.log(`Angular server listening on port ${process.env.PORT}`);
});