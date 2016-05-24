import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'newgame',
  templateUrl: 'newroom.template.html'
})

export class NewRoom {
  
  // $ref: any;
  
  constructor(private router: Router) {
    // this.$ref = firebase.getRef('/rooms');
  }
  
  private goToRoom(id: string) {
    try {
      this.router.navigate(['Room', {id: `${id}`}]);
    } catch(ex) {
      console.error(ex);
    }
  }
  
  private onComplete(error: any) {
    if (error) {
      console.error(error);
    }
  }

  create() {
    
    // var $newRoom = this.$ref.push();
    // var $id = $newRoom.key();
    
    // var roomName = `Name_${$id}`;
    // var newRoom = new RoomModel(roomName, $id, ROOM_RATING.R, ROOM_SPEED.FAST);
    
    // $newRoom.set(newRoom, this.onComplete.bind(this));
    
    // this.goToRoom($id);
  }
}