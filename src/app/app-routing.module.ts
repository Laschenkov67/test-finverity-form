import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatedClientsComponent } from './clients/created-clients/created-clients.component';
import { AdressFormComponent } from './sign-clients-form/adress-form/adress-form.component';
import { ClientFormComponent } from './sign-clients-form/client-form/client-form.component';
import { ConfirmationFormComponent } from './sign-clients-form/confirmation-form/confirmation-form.component';


const routes: Routes = [
  { path: "", component: ClientFormComponent },
  { path: 'client-form/client', component: ClientFormComponent, pathMatch: 'full'},
  { path: 'client-form/address', component: AdressFormComponent},
  { path: 'client-form/identity',component: ConfirmationFormComponent},
  { path: 'created-client', component: CreatedClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}