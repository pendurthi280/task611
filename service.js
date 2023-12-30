class ContactManager {
  constructor() {
    this.contacts = [
      new Contact({
        id: this.generateAnId(),
        name: "Chandana",
        email: "Chandana@email.com",
        phone: "919603463919",
        landline: "65666565656",
        website: "ryhty",
        address: "ythn",
      })
    ];
  }

  getContacts() {
    var storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.contacts = JSON.parse(storedContacts);
    } else {
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
    return this.contacts;
  }

  getById(id) {
    return this.contacts.find(contact => contact.id === id) || null;
  }

  addContact(contactModel) {
    var id = this.generateAnId();
    contactModel.id = id;
    this.contacts.push(contactModel);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    return contactModel;
  }

  editContact(model) {
    this.contacts = this.contacts.map(con => con.id === model.id ? model : con);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    return model;
  }

  delete(id) {
    const Length = this.contacts.length;
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    return this.contacts.length !== Length;
  }

  generateAnId() {
    return Math.floor(Math.random() * 1000);
  }
}











