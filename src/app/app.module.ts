import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignClientsFormModule } from './sign-clients-form/sign-clients-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignClientsFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}