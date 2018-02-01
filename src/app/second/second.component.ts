import { DemoserviceService } from './../demoservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private demo: DemoserviceService) { }
  user:string;obj:object;
  ngOnInit() {
    this.demo.cast.subscribe(user => this.user = user);
    this.demo.newObj.subscribe(obj=> this.obj = obj);
  }

}
