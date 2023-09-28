import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ShowMorePipePipe } from './show-more-pipe.pipe';



@NgModule({
  declarations: [
    MovieDetailsComponent,
    ShowMorePipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[MovieDetailsComponent]
})
export class MovieDetailsModule { }
