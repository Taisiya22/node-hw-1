const fs = require("fs/promises");
const path = require("path");


const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath)

// TODO: задокументувати кожну функцію
async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

function getContactById(contactId) {
 
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
    listContacts,
}