import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'exercices',
        loadChildren: () => import('../../pages/exercices/exercices.module').then(m => m.ExercicesPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../../pages/profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('../../pages/sign-up/sign-up.module').then(m => m.SignUpPageModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('../../pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
      },
      {
        path: 'programme',
        loadChildren: () => import('../../pages/programme/programme.module').then(m => m.ProgrammePageModule)
      },
      {
        path: 'exercice-detail',
        loadChildren: () => import('../../pages/exercice-detail/exercice-detail.module').then(m => m.ExerciceDetailPageModule)
      },
      
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
