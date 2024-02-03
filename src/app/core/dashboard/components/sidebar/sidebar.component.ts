import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() isOpenedValue = new EventEmitter<boolean>();
  isOpened:boolean =true;
  constructor() { }
  onClicked() {
    this.isOpened = !this.isOpened;
    this.isOpenedValue.emit(this.isOpened);
    console.log(this.isOpened)
  }
}
