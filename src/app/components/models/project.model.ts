import { skill } from "./skill.model";

interface Project{
  imageSrc: string,
  title:string,
  skills:skill[],
  demoLink?: string
  codeLink?: string
}

export {Project}
