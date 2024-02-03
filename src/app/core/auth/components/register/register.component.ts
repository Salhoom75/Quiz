import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  confirmPass: string = '';
  isLoading: boolean = false;
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    public dialog: MatDialog,
    private _ToastrService: ToastrService
  ) {}
  registerForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    role: new FormControl('Student', [Validators.required]),
    country: new FormControl('Egypt', [Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
      ),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
      ),
    ]),
  });
  onRegister(data: FormGroup) {
    this.isLoading=true;
    console.log(data.value);
    data.value.userName = this.firstName + this.lastName;
    data.value.confirmPassword = this.confirmPass;
    console.log(data.value.confirmPassword);
    if (data.value.role == 'Student') {
      data.value.role = 'user';
    } else {
      data.value.role = 'admin';
    }
    console.log(data.value.role);

    console.log(data.value.userName);
    this._AuthService.onRegister(data.value).subscribe({
      next: (res) => {
        console.log(res);
        // this._Router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading=false;
        this._ToastrService.error(err.error.message, 'error');
      },
      complete: () => {
        this.isLoading=false;
        this._ToastrService.success('Welcome', data.value.userName);
      },
    });
  }
}
