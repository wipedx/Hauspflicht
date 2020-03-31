import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { AuthContentRoutingModule } from './auth-content-routing.module';
import { AuthContentComponent } from './auth-content.component';
import { NavigationComponent } from './global/navigation/navigation.component';

@NgModule({
  declarations: [
    AuthContentComponent,
    OverviewComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    AuthContentRoutingModule
  ]
})
export class AuthContentModule { }