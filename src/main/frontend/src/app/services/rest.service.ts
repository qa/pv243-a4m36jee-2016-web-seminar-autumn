import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Message } from '../message/message.component';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RestService {

  constructor(private http: Http) { }

  private url = '/api/v1/messages';

  public getMessages(): Observable<Message[]> {
    return this.http.get(this.url).map(response => response.json());
  }

  public addMessage(message: Message) {
    this.http.post(this.url, message).subscribe(response => {
      console.log(response.json());
    });
  }

  // todo: implement this on back-end
  public deleteMessage(id: number) {
  }

}
