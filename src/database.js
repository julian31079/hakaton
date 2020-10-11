const mongoose = require("mongoose");
const MONGODB_URI = `mongodb+srv://julian31079:1234@cluster0.wm6mv.gcp.mongodb.net/test?retryWrites=true&w=majority`;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.error(err));