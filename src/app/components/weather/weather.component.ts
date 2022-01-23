import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Weather } from "../../models/weather.model"

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
      private api: ApiService
  ) { }

  @Input() weather: Weather;
  @Input() loading: boolean;

  ngOnInit(): void { }

  // Submit handler will update the weather data

}
