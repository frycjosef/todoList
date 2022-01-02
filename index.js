const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

const app = express();

//Middleware
//Form data middleware
app.use(bodyParser.urlencoded({
    extender: false
}));
//Json body middleware
app.use(bodyParser.json());

//Cors middleware
app.use(cors());

//Setting up static directory
app.use(express.static(path.join(__dirname, 'public')));

//Passport middleware
app.use(passport.initialize());
//Bring in the Passport Strategy
require('./config/passport')(passport);

app.use(express.json())

const db = require('./config/keys').mongoURI;
console.log(mongoose.version);
mongoose.connect(db, {
    //userNewUrlParser: true
}).then(() => {
    console.log("Database connected")
}).catch(err => {
    console.log(`Error occured while connecting to database \n${err}`)
});

const tasks = require('./server/routes/api/tasks');
const users = require('./server/routes/api/users');

app.use('/api/tasks', tasks);
app.use('/api/users', users);

//Handle production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/server/public'));

    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/server/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
