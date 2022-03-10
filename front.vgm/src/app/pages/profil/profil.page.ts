import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
//@ts-ignore
@Component({
  selector: 'app-profil',
  templateUrl: 'profil.page.html',
  styleUrls: ['profil.page.scss'],
})
export class ProfilPage {
  seance = '2,4,6';
  allUsers: any;
  apiUrl = 'http://localhost:5000/api/v1/users/6213b3432d12baf306841b20';

  id = '6213b3432d12baf306841b20';

  constructor(
    public userMethod: UsersService,
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  ngOnInit() {
    console.log('youppiii');
    var calendrier = document.getElementById('calendar');
    var DateNow = new Date();
    var Month = DateNow.getFullYear() + '-0' + (DateNow.getMonth() + 1) + '-00';
    calendrier.setAttribute('min', Month);
    var Month = DateNow.getFullYear() + '-0' + (DateNow.getMonth() + 2) + '-00';
    calendrier.setAttribute('max', Month);

    //@ts-ignore

    this.userMethod.getAllUsers().then((data) => {
      this.allUsers = data;
      console.log(this.allUsers);
    });

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //   "last_name": "Maudet"
    // });

    // var requestOptions = {
    //   method: 'PUT',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };

    // fetch("http://localhost:5000/api/v1/users/6213b3432d12baf306841b20", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
