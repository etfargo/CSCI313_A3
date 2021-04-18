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
  submit(f: string, l: string, p: number, e: string) {
    //need to create a contact to send give to addContact(contact)
    //let f: string = document.getElementById("firstName");
    
    this.cAdd = {fName: f, lName: l, phoneNum: p, email: e};
    if(f.length == 0 || l.length == 0 || p == 0 || e.length == 0 ) {
      alert("Please fill out all fields");
    }
    else {
      this.cServ.addContact(this.cAdd);
    }
  }
  constructor(private cServ: ContactsService) { }

  ngOnInit(): void {
  }

}
