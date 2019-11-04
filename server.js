// required node modules: dotenv('password protection/security'), express(server), mongoose(database)
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;
let uri = "";

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    uri = process.env.ATLAS_URI;
    // connection string for Atlas here, protected by 'process.env.ATLAS_URI'
} else {
    uri = process.env.ATLAS_URI;
    // connection string for local database storage
}

// connection to database
mongoose.connect(uri, { useNewUrlParser: true, 
                        useCreateIndex: true, 
                        useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection is live!");
});

const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

// connection to express server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});