import { Component } from '@angular/core';
import { Member } from './../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

  constructor(private router: Router){}
  
  members: Member[] = [
   new Member("Jamie", 24,
       "general", 3, 1),
   new Member("John", 32,
       "general", 1, 2),
   new Member("Moose", 9,
       "expert", 6, 3)
 ];

 goToDetailPage(clickedMember: Member) {
   this.router.navigate(['members', clickedMember.id]);
 }
}
