import { Injectable } from '@angular/core';
import { Contact } from './model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  //needs array of contacts
  //fetch, add, edit, delete

  contactEdit: Contact;

  CONTACTS: Contact[] = [
    {
        fName: "Billy",
        lName: "Joel",
        phoneNum: 9999999999,
        email: "billy.joel@gmail.com"
    },
    {
        fName: "Jane",
        lName: "Doe",
        phoneNum: 1011011001,
        email: "doejane@gmail.com"
    },
  ];

  editContact(index: number, newF: string, newL: string, newP: number, newE: string) {
    //logic for changing the element at specified index
    this.CONTACTS[index] = {fName: newF, lName: newL, phoneNum: newP, email: newE};
    console.log("service edit contact");
  }

  getIndex(contact: Contact): number {
    console.log(this.CONTACTS.findIndex(c => contact === c));
    return this.CONTACTS.findIndex(c => contact === c);
  }


  getContactForEdit(): Contact{
    return this.contactEdit;
  }

  chooseContactToEdit(contact: Contact) {
    this.contactEdit = contact;
  }

  addContact(contact: Contact):void {
    this.CONTACTS.push(contact);
  }

  deleteContact(cDel: Contact):void {
    this.CONTACTS.forEach((contact, index) => {
      if(contact==cDel) this.CONTACTS.splice(index, 1);
    });
  }

  findContactbyFullName(name: string) {
    return this.CONTACTS.find(contact => contact.fName + " " + contact.lName === name);
  }
  
  constructor() { }
}
