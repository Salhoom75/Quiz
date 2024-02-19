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
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    public dialog: MatDialog,
    private _ToastrService: ToastrService
  ) {}
  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
    ]),
    last_name: new FormControl(null, [
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Z0-9]{3,30}$/
        ),
    ]),
    role: new FormControl('Student', [Validators.required]),
  });
  onRegister(data: FormGroup) {
    console.log(data.value);
    this._AuthService.onRegister(data.value).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message,'Welcome You can Login Now');
      },
      error: (err) => {
        this._ToastrService.error(err.error.message, 'Error');
      },
      complete: () => {
        this._Router.navigate(['auth/login']);
      },
    });
  }
}
