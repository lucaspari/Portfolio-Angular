import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-dark-mode',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.css'
})
export class DarkModeComponent {
  darkModeEnabled = localStorage.getItem('theme') == 'dark';
  faMoon = faMoon;
  faSun = faSun;
  onInit() {
  }
  private setLightTheme() {
    localStorage['theme'] = 'light';
    document.documentElement.classList.remove('dark');
    this.darkModeEnabled = false;

  }

  private setDarkTheme() {
    localStorage['theme'] = 'dark';
    document.documentElement.classList.add('dark');
    this.darkModeEnabled = true;
  }
  toogleDarkMode() {
    if (this.darkModeEnabled) {
      console.log("🚀 ~ file: dark-mode.component.ts:32 ~ DarkModeComponent ~ toogleDarkMode ~ this.darkModeEnabled):", this.darkModeEnabled)
      this.setLightTheme();
    }
    else {
      this.setDarkTheme();
    }
  }
}
