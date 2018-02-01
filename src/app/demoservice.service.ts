import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DemoserviceService {

  constructor() { }
  private user = new BehaviorSubject<string>("Satyapriya");
  cast = this.user.asObservable();

  private obj = new BehaviorSubject<object>({name: "satya", age:20});
  newObj = this.obj.asObservable();

  editUser (newUser) {
    this.user.next(newUser);
  }
  editObj (name: string, age = 22) {
    this.obj.next({name:name,age:age});
  }

}
