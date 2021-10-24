import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditUserComponent } from './modules/users/components/add-edit-user/add-edit-user.component';
import { UsersListComponent } from './modules/users/pages/users-list.component';
// import { SharedModule } from './shared/shared.module'
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserService } from './core/services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddEditUserComponent,
    UsersListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    // SharedModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
