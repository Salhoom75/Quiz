import { Component } from '@angular/core';
import { LogoutComponent } from './components/logout/logout.component';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from './services/users.service';
import { ChangePassComponent } from './components/change-pass/change-pass.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userName = localStorage.getItem('userName');
  userId: any = localStorage.getItem('id');
  resdata: any;
  constructor(public dialog: MatDialog, private _UsersService: UsersService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getuserProfile(this.userId);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  getuserProfile(id: string) {
    this._UsersService.onGetUserProfile(id).subscribe({
      next: (res) => {
        this.resdata = res;
      },
    });
  }

  

  
  openDialogChange(): void {
    const dialogRef = this.dialog.open(ChangePassComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
