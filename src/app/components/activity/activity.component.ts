import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Activity } from "../../models/activity.model"

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(
      private api: ApiService
  ) { }

  @Input() activity: Activity;
  @Input() loading: boolean;

  ngOnInit(): void {
  }

}
