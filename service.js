class ContactManager
 {
  constructor() 
   {
    this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
   }

   generateAnId()
   {
      return Math.floor(Math.random()*1000);
   }
 
   addContact(contactModel)
   {
      var id = this.generateAnId();
      contactModel.id = id;
      this.contacts.push(contactModel);
      localStorage.setItem('contacts',JSON.stringify(this.contacts));
      return contactModel;
   }
     
   delete(id)
     {
      const Length = this.contacts.length;
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      localStorage.setItem('contacts',JSON.stringify(this.contacts));
      return this.contacts.length !== Length;
     }
   

     editContact(id, model) 
     {
         this.contacts = this.contacts.map(contact => 
        {
          if (contact.id === id) {}
          return contact;
        });
       localStorage.setItem('contacts', JSON.stringify(this.contacts));
     }

  
     getById(id) 
    {
      return this.contacts.find(contact => contact.id === id) || null;
    }
    

  getContacts() 
  {
    var storedContacts = localStorage.getItem('contacts');
    console.log(JSON.parse(storedContacts) );
    this.contacts = storedContacts ? JSON.parse(storedContacts) : [];
    console.log(this.contacts);
    return this.contacts;
     
  }
  
  


 }



   

  
  

  


  