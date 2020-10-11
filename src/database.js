
  const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://julian31079:1234@cluster0.wm6mv.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});