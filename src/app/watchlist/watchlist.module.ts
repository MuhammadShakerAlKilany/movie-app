import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MoviesListModule } from '../movies-list/movies-list.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WatchlistComponent
  ],
  imports: [
    CommonModule,
    MoviesListModule,
    SharedModule
  ],
  exports:[SharedModule]
})
export class WatchlistModule { }
