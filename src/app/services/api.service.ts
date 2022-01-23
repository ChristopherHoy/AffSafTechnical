import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, map } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// Import models
import { Weather } from "../models/weather.model";
import { Person } from "../models/person.model";
import { Activity } from "../models/activity.model";

@Injectable({
    providedIn: 'root'
})


export class ApiService {

    // Include the httpclient service as a dependency
    constructor(private http: HttpClient) {}

    // Fetch the weather
    getWeather(latitiude: string, longitude: string): Observable<Weather> {

        // Set parameters
        let options = {
            params: {
                lat: latitiude,
                lon: longitude
            }
        }

        // Get result
        let res = this.http.get("https://fcc-weather-api.glitch.me/api/current", options)
        return res.pipe(map((response: any) => new Weather().apply(response)));

    }

    // Fetch random users to use as friends
    getFriends(num=2): Observable<Person[]> {
        let res = this.http.get("https://randomuser.me/api?results=" + num)
        return res.pipe(map((response: any) => response.results.map((person: Object) => new Person().apply(person))));
    }

    // Fetch a random activity for the number of specified friends+1
    getActivity(num=2): Observable<Activity> {
        let res = this.http.get("https://www.boredapi.com/api/activity?participants=" + ( num + 1 ))
        return res.pipe(map((response: any) => new Activity().apply(response)));
    }
}
