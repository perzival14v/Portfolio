import { Component, OnInit } from '@angular/core';
import { projectData } from "../../../data/projects.data";
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  projectsLocalData:Array<Project> = []

  getProjects(){
    for (const project of projectData.entries()) {
      this.projectsLocalData.push(project[1])
    }
  }


  ngOnInit(): void {
    this.getProjects();
  }

}
