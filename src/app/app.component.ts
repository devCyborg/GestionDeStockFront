import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionStockFronEnd';
  showHideSideBar: boolean= false;

  onShowHideSideBar(showHideSideBar) {

    this.showHideSideBar= showHideSideBar;
  }
}
