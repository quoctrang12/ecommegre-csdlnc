//dotenv
require('dotenv').config();
const app = require("./app");
//connect DB
const { connectDB } = require('./src/config/configDB')
connectDB();

//port
const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})