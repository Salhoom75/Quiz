import { Component } from '@angular/core';
import { AddUpdateStudentComponent } from '../add-update-student/add-update-student.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  constructor(public dialog: MatDialog,){
    
  }
openAddDialogue(): void {
  const dialogRef = this.dialog.open(AddUpdateStudentComponent, {
    data: {},
    width: '40%',
  });

  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
    console.log(result);
    if(result){

    }
  });
}
}
