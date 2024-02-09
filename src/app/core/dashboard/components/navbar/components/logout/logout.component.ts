import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(
    public dialogRef: MatDialogRef<LogoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tostar: ToastrService,
    private router: Router
    ) {}
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
    }

  logout() {
    localStorage.clear();
    this.onNoClick();
    this.tostar.success('You Logout Now');
    this.router.navigate(['/auth/login']);
  }
  onNoClick(): void {
    this.dialogRef.close();
    localStorage.clear();
  }
}
