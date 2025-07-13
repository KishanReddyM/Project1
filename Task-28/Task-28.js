// Contact list stored in an array
let contacts = [];

// Function to add a new contact
function addContact(name, phone, email) {
  contacts.push({ name, phone, email });
  console.log(`✅ Contact added: ${name}`);
}

// Function to display all contacts
function displayContacts() {
  if (contacts.length === 0) {
    console.log("📭 No contacts to display.");
    return;
  }
  console.log("📒 Contact List:");
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
  });
}

// Function to search contact by name
function searchContact(name) {
  const found = contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
  if (found.length === 0) {
    console.log(`🔍 No contact found with name: ${name}`);
  } else {
    console.log(`🔍 Search results for "${name}":`);
    found.forEach((c, i) => {
      console.log(`${i + 1}. Name: ${c.name}, Phone: ${c.phone}, Email: ${c.email}`);
    });
  }
}

// Function to delete contact by name or index
function deleteContact(identifier) {
  if (typeof identifier === "number") {
    // Delete by index
    if (identifier >= 0 && identifier < contacts.length) {
      let removed = contacts.splice(identifier, 1);
      console.log(`🗑️ Deleted contact: ${removed[0].name}`);
    } else {
      console.log("❌ Invalid index.");
    }
  } else if (typeof identifier === "string") {
    // Delete by name
    let index = contacts.findIndex(contact => contact.name.toLowerCase() === identifier.toLowerCase());
    if (index !== -1) {
      let removed = contacts.splice(index, 1);
      console.log(`🗑️ Deleted contact: ${removed[0].name}`);
    } else {
      console.log("❌ Contact not found by name.");
    }
  }
}

// Function to edit contact by name
function editContact(name, newInfo) {
  let index = contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());
  if (index !== -1) {
    for (let key in newInfo) {
      if (contacts[index][key] !== undefined) {
        contacts[index][key] = newInfo[key];
      }
    }
    console.log(`✏️ Contact updated: ${contacts[index].name}`);
  } else {
    console.log("❌ Contact not found.");
  }
}

// --------- Test the Contact Book ---------

addContact("Alice", "123-456-7890", "alice@example.com");
addContact("Bob", "987-654-3210", "bob@example.com");
addContact("Charlie", "555-555-5555", "charlie@example.com");

displayContacts();

searchContact("bob");

editContact("Bob", { phone: "111-222-3333", email: "bob@newmail.com" });

deleteContact("Charlie"); // by name
deleteContact(0);         // by index

displayContacts();
