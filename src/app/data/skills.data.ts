import { skill } from "../components/models/skill.model";

let skillsData = new Map<string, skill>([
  ["HTML",{
    imageSrc:"assets/Icons/Skills/HTML5.svg",
    text:"HTML"
  }],
  ["CSS",{
    imageSrc:"assets/Icons/Skills/CSS3.svg",
    text:"CSS"
  }],
  ["JS",{
    imageSrc:"assets/Icons/Skills/JS.svg",
    text:"JavaScript"
  }],
  ["TS",{
    imageSrc:"assets/Icons/Skills/Typescript.svg",
    text:"TypeScript"
  }],
  ["Angular",{
    imageSrc:"assets/Icons/Skills/Angular.svg",
    text:"Angular"
  }],
  ["Sass",{
    imageSrc:"assets/Icons/Skills/Sass.svg",
    text:"Sass"
  }],
  ["Python",{
    imageSrc:"assets/Icons/Skills/Python.svg",
    text:"Python"
  }],
  ["Java",{
    imageSrc:"assets/Icons/Skills/Java.svg",
    text:"Java"
  }],
  ["C/C++",{
    imageSrc:"assets/Icons/Skills/C.svg",
    text:"C/C++"
  }],
  ["SQL",{
    imageSrc:"assets/Icons/Skills/sql.svg",
    text:"SQL"
  }],
  ["Git",{
    imageSrc:"assets/Icons/Skills/git.svg",
    text:"Git"
  }],
])

function getSkill(name:string):skill{

  let aux = skillsData.get(name)

  if(aux!==undefined){
    return aux
  }else{
    return {
      imageSrc:"",
      text:`Skill not found: ${name}`
    }
  }
}

export{skillsData, getSkill }


