import { Project } from "../components/models/project.model";
import { getSkill } from "./skills.data";

let projectData = new Map<string, Project>([
  ["Project 1",{
    imageSrc:"assets/Images/Projects/BatataBit.PNG",
    title:"BatataBit Landing Page",
    skills:[
      getSkill("HTML"),
      getSkill("CSS"),
      getSkill("JS"),
    ] ,
    demoLink:"",
    codeLink:""
  }],
  ["Project 2",{
    imageSrc:"assets/Images/Projects/Portfolio.PNG",
    title:"Personal Portfolio",
    skills:[
      getSkill("Angular"),
      getSkill("Sass"),
      getSkill("TS"),
    ] ,
    demoLink:"",
    codeLink:"https://github.com/xavi-val/Portfolio"
  }]
])

export{projectData}
