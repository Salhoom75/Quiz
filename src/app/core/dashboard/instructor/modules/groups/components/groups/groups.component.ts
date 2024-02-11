import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { GroupService } from '../../services/group.service';
import { Group, addGroup } from '../../models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  Groupdata1: Group[] = [];
  Groupdata2: Group[] = [];
  constructor(public dialog: MatDialog, private _GroupService: GroupService) {}
  ngOnInit(): void {
    this.onGetAllGroups();
  }

  onGetAllGroups() {
    this._GroupService.getAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        this.Groupdata1 = res.slice(0, 5);
        this.Groupdata2 = res.slice(5, 10);
      },
    });
  }

  createGroup(data: addGroup) {
    this._GroupService.createGroups(data).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  openDialogAddEdit(): void {
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
  openDialogDelete(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
      }
    });
  }
}
