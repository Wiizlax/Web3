const mongoose = require("mongoose");

if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log("Pas le bon nombre d'arguments");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://Wiizlax:${password}@cluster0.yhenn.mongodb.net/phonebook`;

console.log("url:", url );

// mongoose.set("strictQuery", false);

mongoose.connect(url).catch((error) => {
  console.error("Error : ", error);
});

if (process.argv.length === 5) {
  const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
  });

  const Contact = mongoose.model("Contact", phonebookSchema);

  const contact = new Contact({
    name: process.argv[3],
    number: process.argv[4],
  });

  contact.save().then((result) => {
    console.log(
      "added " + contact.name + " number " + contact.number + " to phonebook"
    );
    mongoose.connection.close();
  });
} else {
  const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
  });

  const Contact = mongoose.model("Contact", phonebookSchema);
  console.log("Phonebook:");
  Contact.find({}).then((result) => {
    result.forEach((contact) => {
      console.log(contact.name + " " + contact.number);
    });
    mongoose.connection.close();
  });
}
