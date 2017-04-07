import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  members: Member[] = [
   new Member("Jamie", 24,
       "general", 3, 1),
   new Member("John", 32,
       "general", 1, 2),
   new Member("Moose", 9,
       "expert", 6, 3)
 ];
}
