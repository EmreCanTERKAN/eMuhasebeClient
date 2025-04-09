import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { signalrApi } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  hub : signalR.HubConnection | undefined;
  constructor() { }

  connect(callBack : () => void){
    this.hub = new signalR.HubConnectionBuilder()
    .withUrl(`${signalrApi}/report-hub`)
    .build();

    this.hub.start()
    .then(() => {
      console.log("report hub ile bağlantı başlatıldı");
      callBack();
    })
  }
}
