import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {
      id: 1,
      name: 'Contact 001',
      description: 'Contact 001 desc',
      email: 'c001@gmail.com',
    },
    {
      id: 2,
      name: 'Contact 002',
      description: 'Contact 002 desc',
      email: 'c002@gmail.com',
    },
    {
      id: 3,
      name: 'Contact 003',
      description: 'Contact 003 desc',
      email: 'c003@gmail.com',
    },
    {
      id: 4,
      name: 'Contact 004',
      description: 'Contact 004 desc',
      email: 'c004@gmail.com',
    }
  ];

  constructor() { }

  public getContacts(): Array<{id, name, description, email}> {
    return this.contacts;
  }

  public createContact(contact: {id, name, description, email}) {
    this.contacts.push(contact);
  }
}
