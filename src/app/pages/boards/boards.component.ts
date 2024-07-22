import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBorderTopLeft, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faTrello = faTrello
  faBorderTopLeft = faBorderTopLeft
  faChartLine = faChartLine
  faClock = faClock
}
