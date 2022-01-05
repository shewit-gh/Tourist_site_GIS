const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

PlaceRoute = require("./routes/placesroute");
CommentRoute = require("./routes/commentRoute");
RatingRoute = require("./routes/ratingRoute");

app.use('/api/comment', CommentRoute);
app.use('/api/place', PlaceRoute);
app.use('/api/rating', RatingRoute);

const DB_URI = "mongodb://localhost:27017/tourist_site";
mongoose.connect(DB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  app.listen(port, () => {
    console.log(`listening on port ${port}!`)
  });
}).catch(err=>{
  console.log("database connection failed \n" + err);
})
