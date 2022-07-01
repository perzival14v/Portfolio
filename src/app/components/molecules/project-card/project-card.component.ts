import { Component, Input, OnInit } from '@angular/core';
import { Project } from "../../models/project.model";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  @Input() project: Project = {
    imageSrc: "assets/Images/Default/image-default.jpg",
    title: "Default Title" ,
    skills:[]

  }

  ngOnInit(): void {
  }

}
