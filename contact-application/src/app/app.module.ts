import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact-list/contact/contact.component';
import { AddContactComponent } from './contact-list/add-contact/add-contact.component';
import { EditContactComponent } from './contact-list/edit-contact/edit-contact.component';
import {ContactsService } from './contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
