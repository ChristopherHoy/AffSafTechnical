import { Component, OnInit, Input } from '@angular/core';
import { Person } from "../../models/person.model"

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor() { }

  @Input() friends: Array<Person>;
  @Input() loading: boolean;

  ngOnInit(): void {
  }

}
