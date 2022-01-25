import { Component } from '@angular/core';
import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyB2sU74tWxMf_9GTEX18slF7hjd1wMjk-0',
  databaseURL: "https://angularchat-3d1a9-default-rtdb.firebaseio.com"
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';
  constructor() {
    firebase.initializeApp(config);
  }
  
}
