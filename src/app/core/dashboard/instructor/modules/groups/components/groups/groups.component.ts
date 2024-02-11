import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { GroupService } from '../../services/group.service';
import { Group } from '../../models/group';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit{
  pageIndex: number = 0;
  pageSize: number = 10;
  pageNumber: number | undefined = 1;
  Groupdata:Group[]=[];

  constructor(public dialog: MatDialog,private _GroupService:GroupService,private _Toastr:ToastrService) {}
ngOnInit(): void {
  this.onGetAllGroups()
}

  onGetAllGroups(){
   
    this._GroupService.getAllGroups().subscribe({
      next:(res)=>{
        console.log(res);
        this.Groupdata=res;
        
      }
    })
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
  openDialogDelete(data:any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {data},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result.data._id);
      if (result) {
         this.deleteGroup(result.data._id)

        
      }
    });
  }

 deleteGroup(id:string){
  this._GroupService.deleteGroup(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._Toastr.success("Group Deleted Succesfully")
    },error:(err)=>{
      this._Toastr.error(err.error)
    },complete:()=>{
this.onGetAllGroups()
    }
  })
 }
}
