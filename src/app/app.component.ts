import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms'
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
  doSave = true

  get emails() {
    return (this.newFormGroup.get('emails') as FormArray)
  }

  get phones() {
    return (this.newFormGroup.get('phones') as FormArray)
  }

  constructor(
    private fb_contact: FirebaseContactService,
    private formBuilder: FormBuilder
    ) {
      const commonValidator = ['', [Validators.required]]

      this.newFormGroup = this.formBuilder.group({
        first_name: commonValidator,
        last_name: new FormControl('', [Validators.required]),
        street: commonValidator,
        city: commonValidator,
        state: commonValidator,
        country: commonValidator,
        zip: commonValidator,
        emails: this.formBuilder.array([
          new FormGroup({
            email: new FormControl('', [Validators.email])
          })
        ]),
        phones: this.formBuilder.array([
          new FormGroup({
            phone: new FormControl('')
          })
        ]),
      })
     }

  ngOnInit() {
    this.getContacts()
    this.setValidator()
  }

  getContacts() {
    this.contacts$ = this.fb_contact.get()
  }

  save(contact: Contact) {
    this.errorMessages()

    if (this.doSave) {
      this.fb_contact.create(contact)
    }
  }

  getFullAddress(contact: Contact) {
    return `${contact.street}, ${contact.city}, ${contact.state}, ${getCountryName(contact.country)}, ${contact.zip}`
  }

  saveContact() {
    let newEmailsArray = this.emails.value.map(
        (f: { email: string }) => f.email
      )
    
    let newPhonesArray = this.phones.value.map(
      (f: {phone: string }) => f.phone
    )
    
    const rawValue = this.newFormGroup.getRawValue()

    rawValue.emails = newEmailsArray
    rawValue.phones = newPhonesArray
    
    this.save(rawValue)
  }

  clearContact() {
    const nameAndAddressInputs = ['first_name', 'last_name', 'street', 'city', 'state', 'country', 'zip']
    const emailsAndPhonesArray = ['emails', 'phones']

    nameAndAddressInputs.map(f => this.newFormGroup.get(f)?.setValue(''))

    emailsAndPhonesArray.map(f => this.newFormGroup.get(f)?.reset())

    while (this.emails.length > 1) {
      this.removeEmailsRow()
    }

    while (this.phones.length > 1) {
      this.removePhonesRow()
    }
  }

  addEmailsRow() {
    const newEmailsFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.email])
    })

    return this.emails.length < 3 ? this.emails.push(newEmailsFormGroup) : false

  }

  removeEmailsRow() {
    const emailsLength = this.emails.length -1

    return emailsLength > 0 ? this.emails.removeAt(emailsLength) : false
  }

  addPhonesRow() {
    const newPhoneFormGroup = this.formBuilder.group({
      phone: this.formBuilder.control('')
    })

    return this.phones.length < 3 ? this.phones.push(newPhoneFormGroup) : false
  }

  removePhonesRow() {
    const phonesLength = this.phones.length -1

    return phonesLength > 0 ? this.phones.removeAt(phonesLength) : false
  }

  noSpace() {
    return false
  }

  setValidator() {
    const nameValidator = (control: FormControl):ValidationErrors | null => {
      const letterPattern = /^[A-z]*$/
      const valid = letterPattern.test(control.value)
      return valid ? null : { onlyLettersError: {value: control.value} }
    }

    const nameFields = ['first_name', 'last_name']

    nameFields.map(f => {
      this.newFormGroup.get(f)?.setValidators([Validators.required, nameValidator])
      this.newFormGroup.get(f)?.updateValueAndValidity()
    })
    
    const emailValidator = (control: FormControl):ValidationErrors | null => {
      const emailPattern = /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4})$/
      const valid = emailPattern.test(control.value)
      return valid ? null : { correctEmailError: {value: control.value} }
    }

    this.newFormGroup.get('emails')?.setValidators([Validators.required, emailValidator])
    this.newFormGroup.get('emails')?.updateValueAndValidity()
  }

  errorMessages() {
    const errors = []

    if (!this.newFormGroup.get('first_name')?.value) {
      errors.push(`First Name`)
    }

    if (!this.newFormGroup.get('last_name')?.value) {
      errors.push(`Last Name`)
    }

    if (!this.newFormGroup.get('street')?.value) {
      errors.push(`Street Address`)
    }

    if (!this.newFormGroup.get('city')?.value) {
      errors.push(`City`)
    }

    if (!this.newFormGroup.get('state')?.value) {
      errors.push(`State`)
    }

    if (!this.newFormGroup.get('country')?.value) {
      errors.push(`Country`)
    }

    if (!this.newFormGroup.get('zip')?.value) {
      errors.push(`Zip Code`)
    }
    
    this.doSave = errors.length > 0 ? false : true

    return errors.length > 0 ? alert(`Please fill in the following required information: \n ${errors.join('\n')}`) : false
  }
}
