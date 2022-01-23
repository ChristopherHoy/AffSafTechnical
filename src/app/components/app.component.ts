import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'

import { Weather } from "../models/weather.model"
import { Person } from "../models/person.model"
import { Activity } from "../models/activity.model"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    // Include the api service
    constructor(
        private api: ApiService
    ) { }

    // Form Inputs
    latitude: string;
    longitude: string;
    numFriends: number;

    // API Outputs
    weather: Weather;
    friends: Person[];
    activity: Activity;

    // Track loading states
    isLoadingWeather: boolean = false;
    isLoadingFriends: boolean = false;
    isLoadingActivity: boolean = false;

    // Once the submit button is clicked, update all data
    onSubmit(): void {
        this.updateWeather();
        this.updateFriends();
        this.updateActivity();
    }

    updateWeather() {
        this.isLoadingWeather = true;
        this.api.getWeather(this.latitude, this.longitude).subscribe(weather => {
            this.weather = weather;
            this.isLoadingWeather = false;
        });
    }

    // Run for as many friends as needed
    // Must check if I cant request 2 from api
    updateFriends(num=2) {
        this.isLoadingFriends = true;
        this.api.getFriends(this.numFriends).subscribe((friendsList: Person[]) => {
            this.friends = friendsList;
            this.isLoadingFriends = false;
        });
    }

    updateActivity() {
        this.isLoadingActivity = true;
        this.api.getActivity(this.numFriends).subscribe((activity: Activity) => {
            this.activity = activity;
            this.isLoadingActivity = false;
        });
    }

}
