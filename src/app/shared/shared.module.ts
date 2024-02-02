import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
 
  ],

})
export class SharedModule {

 }
