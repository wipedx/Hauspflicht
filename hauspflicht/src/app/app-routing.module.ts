import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { AuthGuard } from './_helpers/auth.guard';
import { OverviewComponent } from './auth-content/overview/overview.component';


const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], children: [
      { path: '', component: OverviewComponent}
    ]
  },
  { path: '**', component: AuthContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
