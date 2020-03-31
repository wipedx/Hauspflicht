import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { AuthContentRoutingModule } from './auth-content-routing.module';
import { AuthContentComponent } from './auth-content.component';
import { NavigationComponent } from './global/navigation/navigation.component';

import { MaterialModule } from '../_helpers/material.module';
import { ProfileMenuComponent } from './global/navigation/profile-menu/profile-menu.component';

@NgModule({
  declarations: [
    AuthContentComponent,
    OverviewComponent,
    NavigationComponent,
    ProfileMenuComponent
  ],
  imports: [
    CommonModule,
    AuthContentRoutingModule,
    MaterialModule
  ]
})
export class AuthContentModule { }
