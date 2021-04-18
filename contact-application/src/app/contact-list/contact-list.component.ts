import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  cList = [];

  editSelected:boolean = false;

  constructor(private cServ: ContactsService) { }

  editContactP() {
    this.editSelected = !this.editSelected;
    console.log("edit in parent called")
  }

  ngOnInit(): void {
    this.cList = this.cServ.CONTACTS; 
  }

}
