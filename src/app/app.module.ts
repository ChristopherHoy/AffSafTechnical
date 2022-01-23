import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { ActivityComponent } from './components/activity/activity.component';
import { PersonComponent } from './components/person/person.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FriendsComponent } from './components/friends/friends.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    PersonComponent,
    WeatherComponent,
    FriendsComponent,
    LoaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
