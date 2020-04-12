import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showHideNav:boolean;

  @Output()
  showChangeSideBar : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  afficherSideBar():boolean {
    this.showHideNav= !this.showHideNav;
    this.showChangeSideBar.emit(this.showHideNav);
    return this.showHideNav;
  }
}
