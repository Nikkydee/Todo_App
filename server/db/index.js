const mongoose = require("mongoose")
require('dotenv').config()

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const appname = (process.env.APP_NAME).toLowerCase();
const dbName = process.env.DB_NAME

const MONGO_URI = `mongodb+srv://${dbUsername}:${dbPassword}@${appname}.9pvtwbw.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Techies`

mongoose.connect (MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connection successful')
})

module.exports = mongoose