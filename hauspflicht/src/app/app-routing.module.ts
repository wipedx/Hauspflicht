import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { AuthGuard } from './_helpers/auth.guard';
import { OverviewComponent } from './auth-content/overview/overview.component';
import { PageNotFoundComponent } from './global/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', loadChildren: () => import(`./auth-content/auth-content.module`).then(m => m.AuthContentModule), canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
