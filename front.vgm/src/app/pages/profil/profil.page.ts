import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: 'profil.page.html',
  styleUrls: ['profil.page.scss']
})
export class ProfilPage {

  seance = "2,4,6"


  apiUrl = "http://localhost:5000/api/v1/users/6213b3432d12baf306841b20"

  id = "6213b3432d12baf306841b20"

  constructor(public http:HttpClient) {
  }

  ngOnInit(){
    console.log("youppiii")
    var calendrier = document.getElementById("calendar")
    var DateNow = new Date
    var Month = DateNow.getFullYear()+'-0'+(DateNow.getMonth()+1)+'-00';
    calendrier.setAttribute("min", Month)
    var Month = DateNow.getFullYear()+'-0'+(DateNow.getMonth()+2)+'-00';
    calendrier.setAttribute("max", Month)

    //@ts-ignore

    this.http.get(this.apiUrl).then((result) => {
      console.log(result, "fhsdjfksfdhlkdsfjsdflkjhdezhkfsdf,nbfbn,kjdsthhfgdktdfgujklgfdgt")
    }).catch((err) => {
      console.log(err, "Erreurururururu")
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


  getArts() {
    return new Promise((resolve) => {
      this.http.get(`${this.apiUrl}`).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

}