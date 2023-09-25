import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';



@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MoviesListComponent]
})
export class MoviesListModule { }
