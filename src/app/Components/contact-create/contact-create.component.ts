import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  contact: {id, name, description, email} = {id: null, name: "", description: "", email: ""};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  createContact(){
    console.log(this.contact);
    this.dataService.createContact(this.contact);
    this.contact = {id: null, name: "", description: "", email: ""};
  }
  
}
