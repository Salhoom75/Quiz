import { Component } from '@angular/core';
import { LogoutComponent } from './components/logout/logout.component';
import { MatDialog } from '@angular/material/dialog';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { SetUpQuizComponent } from '../../instructor/modules/quizes/components/set-up-quiz/set-up-quiz.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  firstName:any= localStorage.getItem('first_name');
  lastName:any= localStorage.getItem('last_name');
  role: any = localStorage.getItem('role');
  groupName=localStorage.getItem('group')
  Id: any;
  resdata: any;
  constructor(
    public dialog: MatDialog,
  ) {
  }
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openDialogChange(): void {
    const dialogRef = this.dialog.open(ChangePassComponent, {
      width: '60%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  startQuiz() {
    const dialogRef = this.dialog.open(SetUpQuizComponent, {
      data: {},
      width: '60%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
      }
    });
  }
}
