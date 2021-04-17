import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  cAdd: Contact;
  submit() {
    //need to create a contact to send give to addContact(contact)
    //let f: string = document.getElementById("firstName");
    
    this.cAdd = {fName: "first", lName:"last", phoneNum: 909090909, email: "email@email.com"};
    this.cServ.addContact(this.cAdd);
  }
  constructor(private cServ: ContactsService) { }

  ngOnInit(): void {
  }

}
