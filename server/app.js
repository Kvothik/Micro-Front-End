// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

// db
mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB Connected")).catch(err => console.log("DB Conncetion ERROR", err));

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));

// routes
const testRoutes = require('./routes/test');
app.use('/', testRoutes);

// port
const port = process.emitWarning.PORT || 8080;

// listener
const server = app.listen(port, () =>
    console.log(`Server is running on ${port}`)
);