import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExercicesPage } from './exercices.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ExercicesPageRoutingModule } from './exercices-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ExercicesPageRoutingModule
  ],
  declarations: [ExercicesPage]
})
export class ExercicesPageModule {}
