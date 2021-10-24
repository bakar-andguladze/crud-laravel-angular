import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModelDto } from '../../modules/users/models/user-model-dto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

const baseUrl = `${environment.apiUrl}/users`;

@Injectable()
export class UserService {

  users = [];

  constructor(private http: HttpClient) {}

  // getUsers() {
  //   return this.http.get<UsersResponse>(baseUrl)
  //     .pipe(map((response: UsersResponse) => {
  //       return response.users;
  //     })
  //   );
  // }

  getUsers() {
    return this.http.get<User[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createUser(user: UserModelDto) {
    return this.http.post(baseUrl, user);
  }

  updateUser(user: UserModelDto) {
    return this.http.put(baseUrl, user);
  }

  deleteUser(user: string) {
    return this.http.delete(`${baseUrl}/${user}`);
  }
}


interface UsersResponse {
  users: User[];
}
