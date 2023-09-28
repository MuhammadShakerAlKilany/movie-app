import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesListModule } from '../movies-list/movies-list.module';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesListModule
  ],
  exports:[SearchComponent]
})
export class SearchModule { }
