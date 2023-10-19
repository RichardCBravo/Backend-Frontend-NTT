import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPagesRoutingModule} from './common-pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CommonPagesRoutingModule,
    RouterModule,
    SharedModule,
  ]
})
export class CommonPagesModule { }
