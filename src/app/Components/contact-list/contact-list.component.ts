import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts;
  selectedContact;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts();
  }

  public selectContact(contact) {
    this.selectedContact = contact;
  }

}
