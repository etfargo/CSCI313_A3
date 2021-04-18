import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contactInput: Contact;
  editToggle: boolean = false;
  @Output() editEvent = new EventEmitter<boolean>(); //@Output edit = new EventEmitter<boolean>(); 

  editContact() {
    this.editToggle = !this.editToggle; //set to true, false
    this.editEvent.emit(this.editToggle); //send value to parent for ngIf directive
    this.cServ.chooseContactToEdit(this.contactInput); //set which contact in service to edit
    console.log("edit contact in child clicked");
  }

  deleteContact() {
    this.cServ.deleteContact(this.contactInput);
  }
  constructor(private cServ: ContactsService) { }

  ngOnInit(): void {
  }

}
