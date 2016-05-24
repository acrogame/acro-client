import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RoomComponent } from './../room/room.component';

@Component({
  moduleId: module.id,
  selector: 'lobby',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'lobby.template.html'
})

export class LobbyComponent {
  
  rooms: FirebaseListObservable<any[]>;
  
  constructor(private af: AngularFire, private router: Router) { 
    this.rooms = af.database.list('/rooms');
  }
  
  go(id: string): void {
    this.router.navigate(['rooms', id]);
  }
}