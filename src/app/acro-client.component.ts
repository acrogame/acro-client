import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'acro-client-app',
  templateUrl: 'acro-client.component.html',
  styleUrls: ['acro-client.component.css']
})
export class AcroClientApp {
  
  title: string;
  rooms: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {
    this.title = 'Hello, world!';
    this.rooms = af.database.list('/rooms');
  }
}
