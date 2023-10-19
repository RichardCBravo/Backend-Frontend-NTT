import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DictionaryKeyTextPipe } from './pipes/dictionary-key-text.pipe';


@NgModule({
  declarations: [
    LayoutComponent,
    FormPageComponent,
    SearchPageComponent,
    DictionaryKeyTextPipe,
  ],
  imports: [
    CommonModule,
    QueryRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class QueryModule { }
