import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Version } from '@angular/compiler';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DataProvider {
  lists: any = [
   
    {itemName: 'app',

    app: 'APP NAME: SIMPLE WEATHER APP',
    Version: 'VERSION: 1.0.0',
    release:' RELEASE DATE:29.01.2019',
    description:'This weather app is the mobile application supporting the major iphone and android platform. Equipped with location based technology to detect user locality, the application can automatically display the latest weather forecast for cities. The weather app get the weather data from sense box.The app automatically changes based on your location and provides current weather plus hourly weather forecasts up to two days in advance.',
    
    
  },
    //{itemName: 'FAQ',
   
    //description:' how do I manage my notifications?',
    
    
    
    
    
  //},
  ];

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
