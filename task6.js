var contactManager = new ContactManager();



window.onload = function () {
  var x = contactManager.getContacts();
  console.log(x);
}

function enterdetails() {
  var addDialog = document.getElementById('iframediv');
  addDialog.classList.add('visible');
  addDialog.classList.remove('iframediv');
  var addDialog = document.getElementById('output');
  addDialog.classList.remove('visible');
  addDialog.classList.add('output');
}




function addContact1(contactModel) {
  var username = document.getElementById("name");
  var useremail = document.getElementById("email");
  var mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  var userphone = document.getElementById("phone");
  var phonematch = /^[91][0-9]{11}$/;
  var userlandline = document.getElementById("landline");
  var userwebsite = document.getElementById("webSite");
  var useraddress = document.getElementById("address");
  if (username.value!="" && userphone.value!="" && userwebsite.value!="" && useraddress.value!="" && useremail.value!="" && useremail.value.match(mailformat) && userphone.value.match(phonematch)) 
  {
    contactModel.name = document.getElementById('name').value;
    contactModel.email = document.getElementById('email').value;
    contactModel.phone = document.getElementById('phone').value;
    contactModel.landline = document.getElementById('landline').value;
    contactModel.website = document.getElementById('webSite').value;
    contactModel.address = document.getElementById('address').value;
    var addContact = contactManager.addContact(contactModel);
    console.log(addContact);
    displayUserData(addContact);
  }
else {
  alert("enter correct data and full data");
  }
}



function displayUserData(addContact) {
  var ul = document.getElementById("unorder");
  var li = document.createElement("li");
  li.id = "list";

  var heading = document.createElement("h1");
  heading.id = "heading";
  heading.appendChild(document.createTextNode(addContact.name));

  var paragraph1 = document.createElement("p");
  paragraph1.id = "p1";
  paragraph1.appendChild(document.createTextNode(addContact.email));

  var paragraph2 = document.createElement("p");
  paragraph2.id = "p2";
  paragraph2.appendChild(document.createTextNode(addContact.phone));

  var anchore = document.createElement("a");
  anchore.href = '#';
  anchore.onclick = function () {
    displayContacts(addContact.id);
  }

  anchore.appendChild(heading);
  anchore.appendChild(paragraph1);
  anchore.appendChild(paragraph2);

  li.appendChild(anchore);
  ul.appendChild(li);
  document.body.appendChild(ul);
  document.getElementById('formData').reset();
  var addDialog = document.getElementById('iframediv');
  addDialog.classList.remove('visible');
  addDialog.classList.add('iframediv');

}



function deleteAndReturnStatus(id) {
  var deletionStatus = contactManager.delete(id);
  console.log(deletionStatus);
  getContactById(id);
}


function editContact1(id) {
  mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  var phonematch = /^[91][0-9]{11}$/;
  var editedContact = contactManager.getById(id);
  console.log(editedContact);
  if (editedContact) {
    editedContact.email = prompt("Enter the new email for " + id + ":", editedContact.email);
    editedContact.phone = prompt("Enter the new phone number for " + id + ":", editedContact.phoneNumber);
    editedContact.website = prompt("Enter the new  wedsite for " + id + ":", editedContact.wedsite);
    editedContact.address = prompt("Enter the new  address for " + id + ":", editedContact.address);
    if (editedContact.email != "" && editedContact.phone != "" && editedContact.website != "" && editedContact.address != "" && editedContact.email.match(mailformat) && editedContact.phone.match(phonematch)) {
      var updatedContact = contactManager.editContact(id, editedContact);
      console.log(updatedContact);
      
      getContactById(id);
    }
    else {
      alert("enter correct data and full data");
    }
  }
  else {
    console.log("Contact not found.");
  }
}

function getContactById(id) {
  var contact = contactManager.getById(id);
  if (contact) {
    console.log(contact);
  } else {
    console.log("Contact not found.");
  }
  displayContacts(id)
}


function displayContacts(id) {


  var addDialog = document.getElementById('output');
  addDialog.classList.add('visible');
  addDialog.classList.remove('output');
  var addDialog = document.getElementById('iframediv');
  addDialog.classList.remove('visible');
  addDialog.classList.add('iframediv');

  var output = document.getElementById("output");
  output.innerHTML = "";
  for (var i = 0; i < contactManager.contacts.length; i++) {
    var contact = contactManager.contacts[i];
    if (contact.id == id) {
      output.innerHTML +=
        "<div class=div1>" + "<h2 class=style1>" + contact.name + "</h2>" +

        "<div class=display1>" + "<div class=imgedit>" + "<img src=Edit-icon.png class=image1>" + "<a onclick='editContact1(" + contact.id + ")'>Edit</a>" + "</div>" +
        "<img src=delete2.png class=.image2>" + "<a  onclick='deleteAndReturnStatus(" + contact.id + ")'>Delete</a>" + "</div>" + "</div>" +
        "<p>" + "Email:" + contact.email + "</P>" +
        "<div>" + "Phone Number:" + contact.phone + "</div>" +
        "<div>" + "LandLine:" + contact.landline + "</div>" +
        "<p>" + "Wedsite: " + contact.website + "</p>" +
        "<p>" + "Address:" + contact.address + "</p>";
      // debugger;
    }
  }

}

















