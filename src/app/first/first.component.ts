import { DemoserviceService } from './../demoservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private demo : DemoserviceService) { }
  user: string;obj:object;name;
  ngOnInit() {
    this.demo.cast.subscribe(user => this.user = user);
    this.demo.newObj.subscribe(obj=> this.obj = obj);
    
  }
  edituser () {
    this.demo.editUser("John");
  }
  editobj () {
    this.demo.editObj("priya");
  }

}
