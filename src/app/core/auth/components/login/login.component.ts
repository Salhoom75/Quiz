import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private _AuthService :AuthService,
    private _Router :Router,
     private _ToastrService :ToastrService,
    
    ){}
  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required , Validators.email]),
    password: new FormControl(null,[Validators.required , Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)])
  })
  onLogin(data:FormGroup){
    console.log(data.value)
    this._AuthService.onLogin(data.value).subscribe({
      next:(res)=>{
        console.log(res);
        
        localStorage.setItem('userToken', res.data.token);
  
        localStorage.setItem('role', res.data.user.role);
        localStorage.setItem('userName', res.data.user.userName);
        localStorage.setItem('Id', res.data.user._id);
         this._ToastrService.success(res.data.user.userName , 'Welcome')
          // this._Router.navigate(['/dashboard/student'])
          if(localStorage.getItem('role')=='user'){
            this._Router.navigate(['/dashboard/student/home'])
           }
           else{
            this._Router.navigate(['/dashboard/instructor/home']);
           }
       
  
      },error:(err)=>{
         this._ToastrService.error(err.error.message , 'error')
      }
    })
  }
      
  
}
