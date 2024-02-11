import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { Group, addGroup } from '../../models/group';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  Groupdata1: Group[] = [];
  Groupdata2: Group[] = [];
  constructor(public dialog: MatDialog, private _GroupService: GroupService,private _Toastr:ToastrService) {}
  ngOnInit(): void {
    this.onGetAllGroups();
  }

  onGetAllGroups() {
    this._GroupService.getAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        // this.Groupdata = res;
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
  openDialogDelete(data: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { data },
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result.data._id);
      if (result) {
        this.deleteGroup(result.data._id);
      }
    });
  }

  deleteGroup(id: string) {
    this._GroupService.deleteGroup(id).subscribe({
      next: (res) => {
        console.log(res);
        this._Toastr.success('Group Deleted Succesfully');
      },
      error: (err) => {
        this._Toastr.error(err.error);
      },
      complete: () => {
        this.onGetAllGroups();
      },
    });
  }
}
