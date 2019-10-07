import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  animations: [routerTransition()]
})
export class CustomerComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, public router: Router) {}

  ngOnInit() {
  }

  onLoggedout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
