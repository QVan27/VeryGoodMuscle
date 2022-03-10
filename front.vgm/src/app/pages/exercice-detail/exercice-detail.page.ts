import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-detail',
  templateUrl: './exercice-detail.page.html',
  styleUrls: ['./exercice-detail.page.scss'],
})
export class ExerciceDetailPage implements OnInit {
  exercice_url = 'assets/imgExo/training.jpg';
  exercice_text = '';

  constructor() {}

  ngOnInit() {
    setInterval(this.LaunchExercice, 30500);
  }
  LaunchExercice() {
    const exercice_number = document.getElementById('exercice_name');
    const exercice_image = document.getElementById('exercice_img');
    const exercice_text = document.getElementById('exercice_text');
    let data = ['Pompes', 'Squat', 'Planche', 'Dips', 'Crunch', 'Fentes'];
    var number_exercice = Math.floor(Math.random() * 6);

    switch (number_exercice) {
      case 0:
        this.exercice_url = 'assets/imgExo/pompes.jpg';
        exercice_text.textContent = `Les mains sont placées au sol à peu près à la même largeur des épaules et les fesses sont poussées vers le haut. Les bras et les jambes devraient être tendus le plus possible. À présent, plie les bras et approche le haut de ton corps du sol. Le front devrait toucher le sol entre tes mains.`;
        break;
      case 1:
        this.exercice_url = 'assets/imgExo/squat.jpg';
        exercice_text.textContent = `“ Asseyez-vous ” tout en poussant votre fessier vers l'arrière. Ne vous contentez pas seulement de plier les genoux.
        Veillez à ce que vos genoux soit bien alignés avec vos orteils.
        Ne négligez pas le haut de votre corps : regardez droit devant vous et ne voûtez pas votre dos.`;
        break;
      case 2:
        this.exercice_url = 'assets/imgExo/gainage.jpg';
        exercice_text.textContent = `Positionnez-vous sur la pointe des pieds, avants-bras en appui au sol, coudes à l'aplomb de vos épaules. L'objectif est de rester dans cette position sans bouger !`;
        break;
      case 3:
        this.exercice_url = 'assets/imgExo/dips.jpg';
        exercice_text.textContent = `Dirige les coudes vers l'extérieur, penche-toi en avant et rentre le menton dans la poitrine. Fléchis lentement les coudes et descends le corps jusqu'à ce que tes bras soient presque parallèles au sol. Ne descends pas trop bas et proscris tout rebond à partir de la position d'arrivée.`;
        break;
      case 4:
        this.exercice_url = 'assets/imgExo/crunch.jpg';
        exercice_text.textContent = `Décoller les omoplates du sol sans pousser la tête avec les mains, Contracter les abdominaux le plus possible en fin de mouvement en expirant tout l'air des poumons, Redescendre lentement jusqu'à étirer les abdominaux complètement, Recommencer.`;
        break;
      case 5:
        this.exercice_url = 'assets/imgExo/fentes.jpg';
        exercice_text.textContent = `Pour faire des fentes correctement, on met un pied devant, et l'autre loin derrière. Le talon du pied à l'arrière doit être toujours décollé du sol. Une fois que l'on est bien placé, on descend le plus bas possible, de manière à avoir un angle de 90° au niveau du genou`;
        break;
    }

    exercice_number.textContent = data[number_exercice];
    exercice_image.setAttribute('src', this.exercice_url);
  }
}
