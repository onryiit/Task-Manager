import { Component } from '@angular/core';
import { navigation } from '../../../navigation/navigation';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  navItems= navigation
}
