import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './modules/users/pages/users-list.component';
import { AddEditUserComponent } from './modules/users/components/add-edit-user/add-edit-user.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'add', component: AddEditUserComponent },
  { path: 'edit/:id', component: AddEditUserComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
