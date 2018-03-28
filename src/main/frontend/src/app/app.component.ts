import { Component } from '@angular/core';
import { Message } from './message/message.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageList: Message[] = [];

  public addMessage(name: string, text: string) {
    this.messageList.push(
      {
        name: name,
        text: text,
        date: +new Date()
      }
    );
  }
}
