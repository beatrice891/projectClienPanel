import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Client} from '../models/Client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients:AngularFireList<any[]>;
  client: AngularFireObject<any>;

  constructor(public af:AngularFireDatabase) {
    this.clients = this.af.list('/clients') as AngularFireList<Client[]>;
   }
  getClients(){
    return this.clients;
  }
}
