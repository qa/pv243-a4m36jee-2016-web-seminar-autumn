import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  data: Message;

  constructor() { }

  ngOnInit() {
  }

}

interface Message {
  name: String,
  text: String,
  date: Number
}
