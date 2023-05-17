// const { Command } = require("commander");
// const program = new Command();
const contacts = require('./contacts');

// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
       const allContacts = await contacts.listContacts();
            //  console.log(allContacts);
          break;
      case "get":
          const oneContact = await contacts.getContactById(id);
        //   console.log(oneContact);
          break;
      case "add":
          const newContact = await contacts.addContact({ name, email, phone });
        //   console.log(newContact);
      case "remove":
          const deleteContact = await contacts.removeContact(id);
          console.log(deleteContact)
  }
}

// invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({action:"get", id: "AeHIrLTr6JkxGE6SN-0Rw"})
// invokeAction({action:"add", name:"Taisiya", email:"taya@gmail.com", phone: "0981234567"})
invokeAction({action:"remove", id: "AeHIrLTr6JkxGE6SN-0Rw"})