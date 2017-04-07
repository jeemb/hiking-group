import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { EditMemberComponent } from './../edit-member/edit-member.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})

export class MembersComponent implements OnInit{
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  sortValue = "all";

  constructor(private router: Router, private memberService: MemberService){}

  goToDetailPage(clickedMember) {
   this.router.navigate(['members', clickedMember.$key]);
 };

 ngOnInit() {
   this.members = this.memberService.getMembers();
 }

 setSortValue(value: string) {
   this.sortValue = value;
 }
}
