export interface IChat {
  timestamp: string;
  userName: string;
  message: string;
}

export class ChatModel implements IChat {
  
  timestamp: string;
  userName: string;
  message: string;
  
  constructor(userName: string, message: string) {
    this.userName = userName;
    this.message = message;
    this.timestamp = 'abc123'; // window.Firebase.ServerValue.TIMESTAMP;
  }
}