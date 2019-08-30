import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  users: any[] = [];
  constructor(private api: DataService) {}

  ngOnInit() {
    this.api.getUsers().subscribe((data) => {
      this.users = data;
    }, (err: any) => {
      console.log(err);
      alert('unable to get users details');
    });
  }
}
