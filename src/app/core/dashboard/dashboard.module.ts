import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TestComponent } from './components/test/test.component';
import { LogoutComponent } from './components/navbar/components/logout/logout.component';
import { ChangePassComponent } from './components/navbar/components/change-pass/change-pass.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from '../interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    TestComponent,
    LogoutComponent,
    ChangePassComponent
  ],
  
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
