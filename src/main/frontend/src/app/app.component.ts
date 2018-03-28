import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageList = [
    {
      name: 'Pepa',
      text: 'ahoj',
      date: 1522158079067
    },
    {
      name: 'foo',
      text: 'zdar',
      date: 1522158079067
    },
    {
      name: 'bar',
      text: 'cau',
      date: 1522158079067
    }
  ];
}
