import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { RoomComponent } from './room/room.component';

// App Route Config 

@Routes([
  // Go to a specific room (TODO)
  {
    'path': '/rooms/:id',
    'component': RoomComponent
  },
  // Get a List of Rooms
  {
    'path': '/rooms',
    'component': LobbyComponent
  }
])

@Component({
  moduleId: module.id,
  selector: 'acro-client',
  templateUrl: 'acro-client.template.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['assets/style/css/acro.css']
})

export class AcroClientComponent {
  
  title: string;
  
  constructor() {
    this.title = 'Hello, world!';
  }
}

// import {Home}         from './home.component';
// import {HowTo}        from './howto.component';
// import {Room}         from './room.component';
// import {RoomNew}      from './create.component';
// import {Auth}         from './auth.component';

// Router Configuration



// Application Root Component:

// @Component({
//   selector: 'acro',
//   directives: [ROUTER_DIRECTIVES],
//   template: `
//     <nav class="navbar color-white" [class.gradient]="showGradient()">
//       <div class="container">
//         <a class="pointer logo" [routerLink]="['Home']">Acro</a>
//         <a class="pointer float-right" [routerLink]="['Auth']">Sign In</a>
//         <a class="pointer float-right" [routerLink]="['RoomNew']">New Room</a>
//         <a class="pointer float-right" [routerLink]="['HowTo']">How to play</a>
//       </div>
//     </nav>
//     <router-outlet></router-outlet>
//   `
// })

// export class AppComponent { 
  
//   location: Location;
  
//   constructor (location: Location) {
//     this.location = location;
//   }
  
//   showGradient(): boolean {
//     var currentPath = this.location.path();
//     // If we're in a room-related path
//     if (currentPath.indexOf('/room') === 0) {
//       // Show gradient if it's the "new room"" component
//       return currentPath.indexOf('/room/new') === 0;
//     } else {
//       return true;
//     }
//   }
// }











