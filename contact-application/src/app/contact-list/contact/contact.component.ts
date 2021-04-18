import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contactInput: Contact;

  edit: boolean = false;

  editContact() {
    this.edit = !this.edit;
  }

  deleteContact() {
    this.cServ.deleteContact(this.contactInput);
  }
  constructor(private cServ: ContactsService) { }

  ngOnInit(): void {
  }

}
