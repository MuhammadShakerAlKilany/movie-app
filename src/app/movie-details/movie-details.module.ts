import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ShowMorePipePipe } from './show-more-pipe.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    MovieDetailsComponent,
    ShowMorePipePipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports:[MovieDetailsComponent]
})
export class MovieDetailsModule { }
