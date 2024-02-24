import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { Group, AddGroup } from '../../models/group';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {

  Groupdata: Group[] = [];
  data: any;
  constructor(
    public dialog: MatDialog,
    private _GroupService: GroupService,
    private _Toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.onGetAllGroups();
  }

  onGetAllGroups() {
    this._GroupService.getAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        this.Groupdata = res;

      },
    });
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.onGetAllGroups();
      if (result) {
        console.log(result);
      }
    });
  }
  openDialogEdit(id:string): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      data: id,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.onGetAllGroups();
      if (result) {
        console.log(result);
      }
    });
  }
  openDialogDelete(data: Group): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { data, name: data.name },
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
