import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-detail',
  templateUrl: './exercice-detail.page.html',
  styleUrls: ['./exercice-detail.page.scss'],
})
export class ExerciceDetailPage implements OnInit {

  exercice_url = "null";

  nbexo = 0;
  
  constructor() {
   }

  ngOnInit() {
    setInterval(this.LaunchExercice, 30500);
  }

  LaunchExercice(){
    const exercice_number = document.getElementById("exercice_name");
    const exercice_image = document.getElementById("exercice_img");
    let data = ['Pompes', 'Squat', 'Planche', 'Dips', 'Crunch', 'Fentes']
    var number_exercice = Math.floor(Math.random() * 3);
    exercice_number.textContent = data[number_exercice]
    
    switch(number_exercice){
      case 0:
        this.exercice_url = "assets/imgExo/pompes.jpg";
        break;
      case 1:
        this.exercice_url = "assets/imgExo/squat.jpg";
        break;
      case 2:
        this.exercice_url = "assets/imgExo/gainage.jpg";
        break;
      case 3:
        this.exercice_url = "assets/imgExo/dips.jpg";
        break;
      case 4:
        this.exercice_url = "assets/imgExo/crunch.jpg";
        break;
      case 5:
        this.exercice_url = "assets/imgExo/fentes.jpg";
        break;
    }
    
    exercice_image.setAttribute( 'src', this.exercice_url );

    this.nbexo = this.nbexo + 1

  }

}
