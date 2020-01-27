import { Component , } from '@angular/core';
import  { user } from './user';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements  {
 user:User = new User();
    submit()
     {
    console.log(this.user);
      }
  }