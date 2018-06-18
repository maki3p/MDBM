import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule,FormsModule, } from "@angular/forms";
import {AddDvdComponent } from "./add-dvd";
import { WelcomeComponent} from "./welcome";
import { MovieService } from "../services/movie.service";
import {MovieLibaryComponent } from "./movie-libary";
import { MovieDetailsComoponent} from "./movie-details";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';



@NgModule({
  declarations: [
  AddDvdComponent,
  WelcomeComponent,
  MovieLibaryComponent,
  MovieDetailsComoponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    
    
    
  ],
  exports: [
    AddDvdComponent,
  ],
  providers: [MovieService],

})
export class ComponentModule { }