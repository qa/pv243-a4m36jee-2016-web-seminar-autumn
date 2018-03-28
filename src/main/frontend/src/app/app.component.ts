import { Component, OnInit } from '@angular/core';
import { Message } from './message/message.component'
import { RestService } from './services/rest.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messageList: Message[] = [];

  constructor(private restService: RestService) {

  }

  ngOnInit(): void {
    this.restService.getMessages()
                    .subscribe((messages) => this.messageList = messages);
  }

  public addMessage(name: string, text: string) {
    const newMessage: Message = {
      name: name,
      text: text,
      date: +new Date()
    }
    this.messageList.push(newMessage);
    this.restService.addMessage(newMessage);
  }

  public deleteMessage(i: number) {
    this.messageList.splice(i, 1);
  }
}
