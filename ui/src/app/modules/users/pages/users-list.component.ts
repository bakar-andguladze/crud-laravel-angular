import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  
  public users : User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .pipe(first())
      .subscribe(users => { this.users = users; });
  }

  onDelete(id: string) {
    const user = this.users.find(x => x.id === id);
    if (!user) return;
    this.userService.deleteUser(id)
        .pipe(first())
        .subscribe(() => this.users = this.users.filter(x => x.id !== id));
  }

}
