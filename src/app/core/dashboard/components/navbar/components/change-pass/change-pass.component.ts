import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss'],
})
export class ChangePassComponent {
  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    private _DialogRef:DialogRef
  ) {}

  isLoading: boolean = false;
  changePassForm = new FormGroup({
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
      ),
    ]),
    password_new: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
      ),
    ]),
  });

  ChangePass(data: FormGroup) {
    this.isLoading = true;
    this._AuthService.onChangePass(data.value).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message)

      },
      error: (err) => {
        this.isLoading = false;
        this._ToastrService.error(err.error.message, 'error');
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onClose():void{
    this._DialogRef.close();
  }
}
