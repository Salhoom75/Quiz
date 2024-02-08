import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'],
})
export class ResetPassComponent {
  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _router: Router
  ) {}
  hide: boolean = true;
  userEmail = localStorage.getItem('email');
  message: any;
  resetPassword = new FormGroup({
    email: new FormControl(this.userEmail, [
      Validators.required,
      Validators.email,
    ]),
    seed: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$'
      ),
    ]),
  });

  onsubmit(data: FormGroup) {
    this._AuthService.onResetPassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message;
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      },
      complete: () => {
        this._ToastrService.success(this.message, 'success');
        this._router.navigate(['/auth/login']);
      },
    });
  }
}
