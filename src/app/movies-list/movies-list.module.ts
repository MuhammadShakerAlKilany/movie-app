import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';



@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MoviesListComponent]
})
export class MoviesListModule { }
