import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ContainerCardComponent } from './card-pages/container-card/container-card.component';
import { HeaderCardComponent } from './card-pages/header-card/header-card.component';
import { BodyCardComponent } from './card-pages/body-card/body-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContainerCardComponent,
    HeaderCardComponent,
    BodyCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    ContainerCardComponent,
    HeaderCardComponent,
    BodyCardComponent
  ]
})
export class SharedModule { }
