import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../../instructor/modules/groups/components/add-edit/add-edit.component';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
interface IMenu {
  title: string,
  icon: string,
  link: string,
  isActive: Boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() isOpenedValue = new EventEmitter<boolean>();
  isOpened: boolean = true;
  constructor(private _authService: AuthService, private _router: Router,
    private toastr: ToastrService, public dialog: MatDialog) { }
  ngOnInit() {
    if (this.isInstructor()) {
      this._router.navigate(['/dashboard/instructor/home'])
    }
    else if (this.isStudent()) {
      this._router.navigate(['/dashboard/student/home'])
    }
  }

  menu:IMenu[]=[
    {
      title: 'Dashboard',
      icon: 'dash-icon',
      link: '/dashboard/instructor/home',
      isActive: this.isInstructor()
    },

    {
      title: 'Students',
      icon: 'students-icon',
      link: '/dashboard/instructor/students',
      isActive: this.isInstructor()
    },
    {
      title: 'Results',
      icon: 'results-icon',
      link: '/dashboard/instructor/results',
      isActive: this.isInstructor()
    },
    {
      title: 'Groups',
      icon: 'groups-icon',
      link: '/dashboard/instructor/groups',
      isActive: this.isInstructor()
    },
    {
      title: 'Dashboard',
     icon: 'dash-icon',
     link: '/dashboard/student/home',
     isActive: this.isStudent()
   }
  ]
  isInstructor(): boolean {
    return this._authService.role == 'Instructor' ? true : false;
  }
  isStudent(): boolean {
    return this._authService.role == 'Student' ? true : false;
  }
  onClicked() {
    this.isOpened = !this.isOpened;
    this.isOpenedValue.emit(this.isOpened);
    console.log(this.isOpened);
  }


}
