import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Person } from "../../models/person.model"

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(
      private api: ApiService
  ) { }

  @Input() person: Person;
  @Input() loading: boolean;

  ngOnInit(): void {
  }

}
