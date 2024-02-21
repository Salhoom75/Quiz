import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ForgetPassComponent } from '../forget-pass/forget-pass.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    public dialog: MatDialog,
    private _ToastrService: ToastrService
  ) {}
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Z0-9]{3,30}$/
        ),
    ]),
  });
  onLogin(data: FormGroup) {
    console.log(data.value);
    this._AuthService.onLogin(data.value).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('userToken', res.data.accessToken);
        localStorage.setItem('group', res.data.profile.group.name);
        console.log(res.data.profile.group.name);
        
        this._AuthService.getUserToken();
        this._ToastrService.success(res.data.profile.userName , 'Welcome');

      },error:(err)=>{
         this._ToastrService.error(err.error.message , 'error')
      },complete:()=>{
        this._Router.navigate(['/dashboard'])
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgetPassComponent, {
      data: {},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){

        this.onForgetPassword(result);
      }
    });
  }
  onForgetPassword(email: string) {
    this._AuthService.onForgetPassword(email).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this._ToastrService.error(err.error.errorMessage, 'Error!');
      },
      complete: () => {
        this._ToastrService.success('Request Success', 'Successfully!');
        this._Router.navigate(['/auth/reset-pass']);
        localStorage.setItem('email', email);
      },
    });
  }
}
