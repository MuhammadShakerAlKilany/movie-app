import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MovieDetailsComponent]
})
export class MovieDetailsModule { }
