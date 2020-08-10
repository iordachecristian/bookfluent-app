import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items: Array<any> = [];
  constructor() {
    this.items = [
      { name: '../../../assets/images/picture1.svg' },
      { name: '../../../assets/images/picture2.svg' },
      { name: '../../../assets/images/picture3.svg' },
      { name: '../../../assets/images/picture4.svg' },
      { name: '../../../assets/images/picture5.svg' },
    ];
  }
}
