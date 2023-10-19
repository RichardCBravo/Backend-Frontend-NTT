import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: '/consulta/form', pathMatch: 'full'
      },
      {
        path: 'form',
        component: FormPageComponent
      },
      {
        path: 'search',
        component: SearchPageComponent
      },
      {
        path: '**', redirectTo: '/404',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
