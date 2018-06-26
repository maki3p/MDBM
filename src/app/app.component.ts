import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import {MovieService} from "../services/movie.service"
import {Movie} from "../models/movie"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movieList: Movie[];
  movie: Movie
  randomMovie :string
  randomMovie2:string
  date: number = Date.now();
  constructor(private router: Router,
    private movieService: MovieService){

  }
  navigateToRoute(routeKey: string): void {
    this.router.navigate([ routeKey ])
  }


  ngOnInit(){
    this.movieService.getAll().subscribe(data => {
      this.movieList = data
      this.randomMovie = this.movieList[Math.floor(Math.random()* this.movieList.length)].id
  });

  }
 
}