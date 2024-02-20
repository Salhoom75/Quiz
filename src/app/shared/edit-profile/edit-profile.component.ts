import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { HelperService } from '../services/helper.service';
import { IUserProfile } from '../models/iuser-profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  role = localStorage.getItem('role');
  constructor(
    private helperService: HelperService,
    private ToastrService: ToastrService
  ) {}

  profile: IUserProfile |any= {
    email: `${localStorage.getItem('email')}`,
    first_name: `${localStorage.getItem('first_name')}`,
    last_name: `${localStorage.getItem('last_name')}`,
    status: `${localStorage.getItem('status')}`,
  };
  editForm = new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    status: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    console.log(this.profile);
    this.editForm.patchValue(this.profile);
    console.log(this.editForm.value)
  }

  onsubmit(data: FormGroup) {
    if (this.role == 'Instructor') {
      this.instructorUpdateAcount(data.value);
    }else{

      this.studentUpdateAcount(data.value);
    }
  }

  instructorUpdateAcount(data: IUserProfile) {
    this.helperService.UpdateInstractorAccount(data).subscribe({
      next: (res:any) => {
        console.log(res);
        this.ToastrService.success(res.message);
      },
    });
  }

  studentUpdateAcount(data: IUserProfile) {
    this.helperService.UpdateStudentAccount(data).subscribe({
      next: (res:any) => {
        console.log(res);
        this.ToastrService.success(res.message);
      },
    });
  }
}
