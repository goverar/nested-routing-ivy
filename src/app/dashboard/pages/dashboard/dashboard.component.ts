import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'app-ngxs';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick(event) {
    console.log('event ', event);
    this.router.navigate(['/logs']);
  }

}
