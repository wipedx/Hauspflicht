import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AuthGuard } from '../_helpers/auth.guard';
import { AuthContentComponent } from './auth-content.component';


const routes: Routes = [
  { path: '', component: AuthContentComponent, canActivateChild: [AuthGuard], children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full'},
    { path: 'overview', component: OverviewComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthContentRoutingModule { }
