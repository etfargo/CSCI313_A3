import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  cEdit: Contact;

  val: number;
  constructor(private cServ: ContactsService) { }

  ngOnInit(): void {
    this.cEdit = this.cServ.getContactForEdit();
  }


  submitEdits(f: string, l: string, p: number, e: string) {
    this.val = this.cServ.getIndex(this.cEdit);
    this.cServ.editContact(this.val, f, l, p, e); //will need to send new contact
  }
}
