import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModelDto } from '../../modules/users/models/user-model-dto';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

const baseUrl = `${environment.apiUrl}/users`;

@Injectable()
export class UserService {

  users = [];

  public userToEdit = null;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createUser(user: UserModelDto) {
    return this.http.post(baseUrl, user);
  }

  updateUser(id:string, user: UserModelDto) {
    return this.http.put(`${baseUrl}/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}


interface UsersResponse {
  users: User[];
}
