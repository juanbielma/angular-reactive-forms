import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './models/contact.interface';
import { CountryOptions, getCountryName } from './models/optionModel-countriesOptions';
import { StateOptions } from './models/optionModel-statesOptions';
import { FirebaseContactService } from './services/fb.contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  contacts$: Observable<Contact[]> | undefined;

  countryOptions = CountryOptions;
  stateOptions = StateOptions;

  constructor(private fb_contact: FirebaseContactService) { }

  ngOnInit() {
    this.getContacts()
  }

  getContacts() {
    this.contacts$ = this.fb_contact.get()
  }

  save(contact: Contact) {
    this.fb_contact.create(contact).then(res => console.log('SAVED:', res))
  }

  getFullAddress(contact: Contact) {
    return `${contact.street}, ${contact.city}, ${contact.state}, ${getCountryName(contact.country)}, ${contact.zip}`
  }

}
