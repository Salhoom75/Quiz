import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { TimerQuizIcoComponent } from './svg/timer-quiz-ico/timer-quiz-ico.component';
import { VaultIcoComponent } from './svg/vault-ico/vault-ico.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TrimDescptionPipe } from './pipes/trim-descption.pipe';
import { MatFormField } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    TimerQuizIcoComponent,
    VaultIcoComponent,
    DeleteDialogComponent,
    TrimDescptionPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    ClipboardModule,
    MatStepperModule,
    MatRadioModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    TimerQuizIcoComponent,
    VaultIcoComponent,
    MatPaginatorModule,
    DeleteDialogComponent,
    TrimDescptionPipe,
    MatSelectModule,
    MatFormField,
    MatFormFieldModule,
    MatTabsModule,
    ClipboardModule,
    MatStepperModule,
    MatRadioModule
  ],
})
export class SharedModule {}
