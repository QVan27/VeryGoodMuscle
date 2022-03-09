import { Component } from '@angular/core';
import { Health } from '@awesome-cordova-plugins/health/ngx';

@Component({
  selector: 'app-profil',
  templateUrl: 'profil.page.html',
  styleUrls: ['profil.page.scss']
})
export class ProfilPage {

  seance = "2,4,6"

  constructor() {
  }

  ngOnInit(){
    var calendrier = document.getElementById("calendar")
    var DateNow = new Date
    var Month = DateNow.getFullYear()+'-0'+(DateNow.getMonth()+1)+'-00';
    calendrier.setAttribute("min", Month)
    var Month = DateNow.getFullYear()+'-0'+(DateNow.getMonth()+2)+'-00';
    calendrier.setAttribute("max", Month)
    console.log(Month)
  }
}