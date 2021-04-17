import { Injectable } from '@angular/core';
import { Contact } from './model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  //needs array of contacts
  //fetch, add, edit, delete

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

  addContact(contact: Contact):void {
    this.CONTACTS.push(contact);
  }

  constructor() { }
}
