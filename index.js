const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
require('dotenv').config();

// import router
authRoute = require('./routes/user.route')
dateRoute = require('./routes/dates.route')
portfolioRoute = require('./routes/portfolio.route')

app.get('/', (req, res) =>{
    res.send("Welcome")
})
app.use(express.json())



//route
app.use('/api/auth', authRoute);
app.use('/api/date', dateRoute);
app.use('/api/portfolio', portfolioRoute);

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URI,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }
        )
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
//connect to MongoDB
connectDB();

//Serve static folder if production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

//Listen to port
app.listen(process.env.PORT || '3002', () => console.log("Server is running on port 3002"));