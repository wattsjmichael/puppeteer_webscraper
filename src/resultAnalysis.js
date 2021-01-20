const data = require("./data");
const {mongoURI} = data;

const mongoose = require("mongoose");
mongoose
.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log("DB is connected"))
.catch(err=> console.log(err));

const compareAndSaveResults = dataObj => {
  try {
   const News = require("../models/News");

   const newNews = new News(dataObj);
   return newNews.save().catch(err => console.log(err));

  } catch (err) {
    console.error(err);
  }
};

module.exports = compareAndSaveResults;