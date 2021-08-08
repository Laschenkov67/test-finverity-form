import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationFormComponent } from './confirmation-form/confirmation-form.component';
import { AdressFormComponent } from './adress-form/adress-form.component';
import { ClientFormComponent } from './client-form/client-form.component';



@NgModule({
  declarations: [ConfirmationFormComponent, AdressFormComponent, ClientFormComponent],
  imports: [
    CommonModule
  ]
})
export class SignClientsFormModule { }
