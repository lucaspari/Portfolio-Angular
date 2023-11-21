import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeComponent } from '../dark-mode/dark-mode.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,DarkModeComponent,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
