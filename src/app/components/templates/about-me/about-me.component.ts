import { Component, OnInit } from '@angular/core';
import { skillsData } from "../../../data/skills.data";
import { studiesData } from "../../../data/studies.data";
import { skill } from '../../models/skill.model';
import { study } from '../../models/study.model';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  img = '../../../../assets/Images/Javier.jpg';
  infoSelected = 1;
  skillLocalData: Array<skill> = []
  studiesLocalData: Array<study> =[]

  private selectInfo(){
    for(let item of skillsData.entries()){
      this.skillLocalData.push(item[1])
    }

    for(let item2 of studiesData.entries()){
      this.studiesLocalData.push(item2[1])
    }

  }

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

  ngOnInit(): void {
    this.selectInfo()
  }
}
