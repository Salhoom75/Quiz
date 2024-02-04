import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { ButtonLoaderComponent } from './button-loader/button-loader.component';
import { TimerQuizIcoComponent } from './svg/timer-quiz-ico/timer-quiz-ico.component';
import { VaultIcoComponent } from './svg/vault-ico/vault-ico.component';



@NgModule({
  declarations: [
    ButtonLoaderComponent,
    TimerQuizIcoComponent,
    VaultIcoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    ButtonLoaderComponent,
    TimerQuizIcoComponent,
    VaultIcoComponent
  ],

})
export class SharedModule {

 }
