import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  isadmin: boolean = false;
  userId: any = localStorage.getItem('id');
  role: any = localStorage.getItem('role');
  userName: any = localStorage.getItem('userName');
  userToken: any = localStorage.getItem('userToken');

  constructor(
    private AuthService: AuthService,
    private _ActivatedRoute: ActivatedRoute,
    private ToastrService: ToastrService
  ) {
    this.userId = _ActivatedRoute.snapshot.params['_id'];
    console.log(this.userId);

    if (this.userId) {
      this.onsubmit(this.editForm);
    }
  }
  editForm = new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    status: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    this.userId = localStorage.getItem('_id');
    this.isInstructor();
    this.role = localStorage.getItem('role');
    this.userName = localStorage.getItem('userName');
    this.userToken = localStorage.getItem('userToken');
  }

  isInstructor() {
    if (this.AuthService.role == 'Instructor') {
      return (this.isadmin = true);
    } else {
      return (this.isadmin = false);
    }
  }
  onsubmit(data: FormGroup) {
    this.AuthService.UpdatemyAccount(data.value).subscribe({
      next: (res) => {
        console.log(res);
        this.ToastrService.success('userProfile updated ');
      },
    });
  }
}
