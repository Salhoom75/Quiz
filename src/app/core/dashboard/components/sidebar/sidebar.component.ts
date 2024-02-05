import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../../instructor/modules/groups/components/add-edit/add-edit.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() isOpenedValue = new EventEmitter<boolean>();
  isOpened: boolean = true;
  constructor(public dialog: MatDialog) {}
  onClicked() {
    this.isOpened = !this.isOpened;
    this.isOpenedValue.emit(this.isOpened);
    console.log(this.isOpened);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      data: {},
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
      }
    });
  }
}
