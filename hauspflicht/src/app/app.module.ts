import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './auth-content/global/navigation/navigation.component';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { LoginComponent } from './_non-auth-content/login/login.component';
import { AuthContentRoutingModule } from './auth-content/auth-content-routing.module';
import { PageNotFoundComponent } from './global/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
