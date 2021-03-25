import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Contact } from "../models/contact.interface";

const CONTACT_COLLECTION_NAME = 'contactos'

@Injectable()
export class FirebaseContactService {

  contactCollection: any;

  constructor(private firestore: AngularFirestore) {
    this.contactCollection = this.firestore.collection(CONTACT_COLLECTION_NAME)
   }

  create(contact: Contact) {
    return new Promise<any>((resolve, reject) => {
      this.contactCollection.add(contact).then((res: any) => console.log(res), (err: any) => reject(err))
    })
  }

  get(): Observable<Contact[]> {
    return this.contactCollection.snapshotChanges().pipe(
      map((contacts: Array<any>) => contacts.map((contact: any) => ({ id: contact.payload.doc.id, ...contact.payload.doc.data()})))
    );
  }

}