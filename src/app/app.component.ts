import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  block = [
    {
      heading: 'Thermostat',
      subheading: 'In Bedroom',
      imageUrl: 'assets/thermostat.png'
    },
    {
      heading: 'Bed Lamp',
      subheading: 'In Bedroom',
      imageUrl: 'assets/lamp.png'
    },
    {
      heading: 'Noria AC',
      subheading: 'In Bedroom',
      imageUrl: 'assets/ac.png'
    },
    {
      heading: 'Door Lock',
      subheading: 'In Home office',
      imageUrl: 'assets/lock.png'
    },
    {
      heading: 'LG TV',
      subheading: 'In Living room',
      imageUrl: 'assets/tv.png'
    },
    {
      heading: 'Thermostat',
      subheading: 'In Bedroom',
      imageUrl: 'assets/thermostat.png'
    }
  ]
}
