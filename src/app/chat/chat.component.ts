import { Component, Input, OnInit } from '@angular/core';
import { IChat, ChatModel } from './chat.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'chat',
  inputs: ['id'],
  templateUrl: 'chat.template.html'
})

export class Chat implements OnInit {
  
  @Input() id;
  
  $chatRef: any;
  chatUrl: string;
  firebase: any;
  
  chats: FirebaseListObservable<any[]>;
  
  constructor(private af: AngularFire) {
    this.chats = this.af.database.list(`/chats${this.id}`);
  }
  
  ngOnInit() {
    this.scrollToBottom();
  }
  
  private addMessage(msg: string) {
    var $newMsg = this.chats.push(new ChatModel('foo', msg));
  }
  
  private scrollToBottom() {
    setTimeout(function () {
      var chatWindow = document.getElementById('scroll-bottom');
      chatWindow.scrollTop = chatWindow.scrollHeight;  
    }, 10);
  }
  
  saySomething($event: any, msg: any) {
    // If they pressed Enter....
    if ($event.keyCode === 13 && msg.value) {
      this.addMessage(msg.value);
      msg.value = '';
    }
  }
}