import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ComponentModule } from "../components";
import {HttpModule} from "@angular/http"
import { MovieService } from "../services/movie.service";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../routes/routes-module";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    FormsModule,
    RouterModule,
    HttpModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule
    
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }