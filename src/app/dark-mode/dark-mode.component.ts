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
  darkModeEnabled = false;
  faMoon = faMoon;
  faSun = faSun;
  onInit() {
    const userPrefersDark = localStorage.getItem('theme') === 'dark';
    const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.darkModeEnabled = userPrefersDark || (!localStorage.getItem('theme') && osPrefersDark);
    this.updateDocumentClass();
  }
  toggleDarkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;
    if (this.darkModeEnabled) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }
  private updateDocumentClass() {
    if (this.darkModeEnabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
