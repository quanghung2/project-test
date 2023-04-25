import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  list = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
    },
    {
      id: 2,
      name: 'Mariano Doe',
      position: 'DEV',
    },
    {
      id: 3,
      name: 'James Doe',
      position: 'HR',
    },
    {
      id: 4,
      name: 'Hana Doe',
      position: 'AIO',
    },
  ];
}
