import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  ngOnInit() {}

  getUsersData() {
    return this.http.get('https://626aa0697f8c1826c3b9decc.mockapi.io/user', {
      observe: 'body',
      responseType: 'json',
    });
  }
  postUsersData(data: Object) {
    return this.http.post(
      'https://626aa0697f8c1826c3b9decc.mockapi.io/user',
      data
    );
  }
  putUser(id: number | undefined, data: Object) {
    return this.http.put(
      `https://626aa0697f8c1826c3b9decc.mockapi.io/user/${id}`,
      data
    );
  }
  deleteUser(id: number | undefined) {
    return this.http
      .delete(`https://626aa0697f8c1826c3b9decc.mockapi.io/user/${id}`)
      .subscribe((data) => {});
  }
}
