import { Component, HostListener } from '@angular/core';
import { AccuretService } from './services/accuret.service';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Accuret-Frontend';
  store = 'All';
  SKU = 'All';
  time = 'All';
  faAngleDown = faAngleDown;

  constructor(private service: AccuretService) { }

  showDropdown(dropdown: string): void {
    if (dropdown === 'store') {
      document.getElementById('storeDropdown').classList.toggle('show');
    } else if (dropdown === 'sku') {
      document.getElementById('SKUDropdown').classList.toggle('show');
    } else {
      document.getElementById('timeDropdown').classList.toggle('show');
    }
  }

  hideDropdown(id: string, userChoice: string): void {
    if (id === 'storeDropdown') {
      document.getElementById('storeDropdown').classList.remove('show');
      this.store = userChoice;
    } else if (id === 'SKUDropdown') {
      document.getElementById('SKUDropdown').classList.remove('show');
      this.SKU = userChoice;
    } else {
      document.getElementById('timeDropdown').classList.remove('show');
      this.time = userChoice;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    console.log('hello');
  }

  print(test: string): void {
    console.log(test);
  }
}
