import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUsers(){
    return [
      {
        username: 'bakar',
        email: 'baqar.andghuladze@gmail.com'
      },
      {
        username: 'ghughuna',
        email: 'g.ghughunishvili@gmail.com'
      }
    ]
  }


}
