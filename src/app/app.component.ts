import { Component } from '@angular/core';
import { AccuretService } from './services/accuret.service';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: AccuretService) { }

  
}
