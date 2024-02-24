import { DialogRef } from '@angular/cdk/dialog';
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
    public DialogRef: MatDialogRef<LogoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tostar: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {

  }

  onNoClick(): void {
    this.DialogRef.close();
  }
  onLogout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
    this.DialogRef.close();
  }
}
