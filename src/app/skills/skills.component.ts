import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  ngOnInit(){
   document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.hidden-no-transform');
    if (element) {
      element.classList.add('show');
    }
  });
  
  }
   skills: Skill[] = [
    { src: "assets/icons8-html.svg", alt: "html" },
    { src: "assets/icons8-css.svg", alt: "css" },
    { src: "assets/icons8-java.svg", alt: "java" },
    { src: "assets/icons8-nodejs.svg", alt: "nodejs" },
    { src: "assets/icons8-spring-boot.svg", alt: "springboot" },
    { src: "assets/icons8-angular.svg", alt: "angular" }
  ];
}
