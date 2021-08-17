import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdressFormComponent } from './adress-form/adress-form.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ConfirmationFormComponent } from './confirmation-form/confirmation-form.component';
import { FormContainerComponent } from './form-container/form-container.component';

@NgModule({
  declarations: [
    AdressFormComponent, 
    ClientFormComponent, 
    ConfirmationFormComponent, 
    FormContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FormContainerComponent
  ]
})

export class SignClientsFormModule {}