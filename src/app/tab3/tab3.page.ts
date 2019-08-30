import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  user: any;
  constructor(private api: DataService, private rout: ActivatedRoute) {}

  ngOnInit() {
    this.init();
    const id = this.rout.snapshot.paramMap.get('id') || 1;
    this.getUserDetails(id);
  }

  getUserDetails(id) {
    this.api.getUser(id).subscribe((data) => {
      this.user = data; console.log(data);
    }, (err: any) => {
      console.log(err);
      alert('unable to get user details with Id ' + id);
    });
  }

  init() {
    this.user = { name: '', username: '', email: '', phone: '', website: '', address: { } }
  }
}
