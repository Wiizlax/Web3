const mongoose = require("mongoose");

if (process.argv.length !== 3) {
  console.log("Pas le bon nombre d'arguments");
  process.exit(1);
}

const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
  });
const Contact = mongoose.model("Contact", phonebookSchema);

app.get('/api/persons', (request, response) => {
    Contact.find({}).then(persons => {
      response.json(persons)
    })
  })