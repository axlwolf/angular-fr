import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Eror404PageComponent } from './shared/pages/eror404-page/eror404-page.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'heroes',
    loadChildren: () => import('./modules/heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path:'404',
    component: Eror404PageComponent
  },
  {
    path:'',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
