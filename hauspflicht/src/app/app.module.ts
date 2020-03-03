import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChoresComponent } from './chores/chores.component';
import { HouseholdComponent } from './household/household.component';
import { ManageHouseholdComponent } from './manage-household/manage-household.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChoresComponent,
    HouseholdComponent,
    ManageHouseholdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
