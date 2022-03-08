import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'programme',
    loadChildren: () => import('./pages/programme/programme.module').then( m => m.ProgrammePageModule)
  },
  {
    path: 'exercices',
    loadChildren: () => import('./pages/exercices/exercices.module').then( m => m.ExercicesPageModule)
  },
  {
    path: 'exercice-detail',
    loadChildren: () => import('./pages/exercice-detail/exercice-detail.module').then( m => m.ExerciceDetailPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
