import { Component, Inject, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';
// import { Spinner } from './../shared/spinner.component';
import { Chat } from './../chat/chat.component';
import { Game } from './../game/game.component';

@Component({
  moduleId: module.id,
  selector: 'room',
  templateUrl: 'room.template.html'
})

export class RoomComponent implements OnInit {
  
  roomId: string;
  
  $roomRef: any;
  $gameRef: any;
  $taskRef: any;
  
  room: Object;
  game: Object;
  
  roomUrl: string;
  chatUrl: string;
  gameUrl: string;
  loading: boolean;
  
  constructor(
    
    // private config: Config, 
    // private firebaseService: FirebaseService, 
    private routeSegment: RouteSegment) {
    
    // var fbUrl = config.get('firebaseUrl');
    
    // Grab the roomId from the uri
    this.roomId = routeSegment.getParam('id');
    
    var roomPath = `/rooms/${this.roomId}`;
    var gamePath = `/games/${this.roomId}`;
    var chatPath = `/chats/${this.roomId}`;
    var taskPath = '/queue/tasks';
    
    // this.$roomRef = firebaseService.getRef(roomPath);
    // this.$gameRef = firebaseService.getRef(gamePath);
    // this.$taskRef = firebaseService.getRef(taskPath);
    
    this.room = {};
    // this.roomUrl = `${fbUrl}${roomPath}`;
    // this.gameUrl = `${fbUrl}${gamePath}`;
    // this.chatUrl = `${fbUrl}${chatPath}`;
    this.loading = true;
  }
  
  ngOnInit() {
    this.loading = false; // todo temp
    // this.$roomRef.once('value', ($snap) => this.roomLoaded($snap));
  }
  
  // private roomLoaded($snap: any): void {
  //   var value = $snap.val();
  //   if (value) {
  //     this.room = value;
  //     this.loading = !value.loaded;
  //   }
  // }
}