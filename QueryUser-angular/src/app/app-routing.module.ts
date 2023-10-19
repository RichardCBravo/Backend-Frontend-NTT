import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./commonPages/common-pages.module').then(m => m.CommonPagesModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./query/query.module').then(m => m.QueryModule)
  },
  {path: '**', redirectTo: '/404',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
