import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  faBell = faBell
  faInfoCircle = faInfoCircle

  isOpen = false

}
