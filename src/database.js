const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://julian31079:1234@cluster0.wm6mv.gcp.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
})
  .then(db => console.log(`DB is connected`))
  .catch(err => console.error(err));