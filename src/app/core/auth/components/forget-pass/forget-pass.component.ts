import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss'],
})
export class ForgetPassComponent {
  constructor(
    private _authService: AuthService,
    private _ToastrService: ToastrService,
    private _router: Router
  ) {}
  email: string = '';

  onSubmit(email: string) {
    this._authService.onForgetPassword(email).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        this._ToastrService.error(err.error.errorMessage, 'Error!');
      },
      complete: () => {
        this._ToastrService.success("Request Success", 'Successfully!');
        this._router.navigate(['/auth/resetPassword']);
        localStorage.setItem('email' , email);
      },
    });
  }
}
