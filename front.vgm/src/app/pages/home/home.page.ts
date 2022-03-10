import { AuthenticationService } from '../../services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // user: any;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    // public userMethod: UsersService
  ) {}

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  // ngOnInit() {
  //   this.userMethod.getById(id).then((data) => {
  //     this.user = data;
  //     console.log(this.user);
  //   });
  // }
}
