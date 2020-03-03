import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoresComponent } from './chores/chores.component';
import { HouseholdComponent } from './household/household.component';
import { ManageHouseholdComponent } from './manage-household/manage-household.component';

const routes: Routes = [
  { path: '', redirectTo: '/chores', pathMatch: 'full' },
  { path: 'chores', component: ChoresComponent },
  { path: 'household', component: HouseholdComponent },
  { path: 'manage-household', component: ManageHouseholdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
