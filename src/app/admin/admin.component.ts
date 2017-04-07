import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, age: string, type: string, years: string) {
    var newMember: Member = new Member(name, age, type, years);
  }

}
