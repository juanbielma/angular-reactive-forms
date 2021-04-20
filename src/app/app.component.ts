import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { Contact } from './models/contact.interface'
import { CountryOptions, getCountryName } from './models/optionModel-countriesOptions'
import { StateOptions } from './models/optionModel-statesOptions'
import { FirebaseContactService } from './services/fb.contact.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  contacts$: Observable<Contact[]> | undefined;

  countryOptions = CountryOptions;
  stateOptions = StateOptions;
  newFormGroup: FormGroup

  get emails() {
    return (this.newFormGroup.get('emails') as FormArray)['controls']
  }

  constructor(
    private fb_contact: FirebaseContactService,
    private formBuilder: FormBuilder
    ) {
      this.newFormGroup = this.formBuilder.group({
        first_name: this.formBuilder.control('', [Validators.required]),
        last_name: this.formBuilder.control('', [Validators.required]),
        street: this.formBuilder.control(''),
        city: this.formBuilder.control(''),
        state: this.formBuilder.control(''),
        country: this.formBuilder.control(''),
        zip: this.formBuilder.control(''),
        emails: this.formBuilder.array([
          this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.email])
          })
        ]),
      })
     }

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

  saveContact() {
    console.log('this.newFormGroup.getRawValue', this.newFormGroup.getRawValue())
  }
}
