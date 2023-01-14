import { Gorev } from '../models/Gorev';
import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { addDoc, updateDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FbservisService {

  constructor(
    public fs: Firestore
  ) { }

  GorevListele() {
    var ref = collection(this.fs, "Gorevler");
    return collectionData(ref, { idField: 'gorevId' }) as Observable<Gorev[]>;
  }
  GorevEkle(gorev: Gorev) {
    var ref = collection(this.fs, "Gorevler");
    return addDoc(ref, gorev);
  }
  GorevDuzenle(gorev: Gorev) {
    var ref = doc(this.fs, "Gorevler/" + gorev.gorevId);
    return updateDoc(ref, { ...gorev });
  }
  GorevSil(gorev: Gorev) {
    var ref = doc(this.fs, "Gorevler/" + gorev.gorevId);
    return deleteDoc(ref);
  }
}
