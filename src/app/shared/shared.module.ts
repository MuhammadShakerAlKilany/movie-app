import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http"
import { ApiService } from './services/api.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FooterComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    NotFoundComponent,
    FooterComponent
  ]
})
export class SharedModule { }
