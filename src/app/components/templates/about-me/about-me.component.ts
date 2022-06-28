import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  img = '../../../../assets/Images/Javier.jpg';
  infoSelected = 1;

  changeInfo(number: number) {
    this.infoSelected = number;

    switch (number) {
      case 1:
        this.img = '../../../../assets/Images/Javier.jpg';
        break;
      case 2:
        this.img = '../../../../assets/Images/books.svg';
        break;
      case 3:
        this.img = '../../../../assets/Images/Skills.svg';
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {}
}
