import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-add-update-student',
  templateUrl: './add-update-student.component.html',
  styleUrls: ['./add-update-student.component.scss'],
})
export class AddUpdateStudentComponent {
  constructor(
    public dialogRef: MatDialogRef<AddUpdateStudentComponent>,
    
    private StudentsService: StudentsService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
