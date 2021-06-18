const express = require('express');
const app = express();
// const cors = require('cors');
require('dotenv').config();

// app.use(cors());

// app.use(express.json({ limit: '50mb', extended: true }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.listen(process.env.PORT, function() {
    console.log(`Angular server listening on port ${process.env.PORT}`);
})