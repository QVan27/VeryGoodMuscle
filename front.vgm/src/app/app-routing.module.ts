import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./components/tabs/tabs.module').then((m) => m.TabsPageModule),
      canLoad: [AuthGuard]// Secure all child pages
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
      canLoad: [IntroGuard, AutoLoginGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./pages/sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'programme',
    loadChildren: () =>
      import('./pages/programme/programme.module').then(
        (m) => m.ProgrammePageModule
      ),
  },
  {
    path: 'exercices',
    loadChildren: () =>
      import('./pages/exercices/exercices.module').then(
        (m) => m.ExercicesPageModule
      ),
  },
  {
    path: 'exercice-detail',
    loadChildren: () =>
      import('./pages/exercice-detail/exercice-detail.module').then(
        (m) => m.ExerciceDetailPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./pages/intro/intro.module').then((m) => m.IntroPageModule),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
