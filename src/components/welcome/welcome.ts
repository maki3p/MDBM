import { Component, OnInit } from '@angular/core';
import { Movie } from "../../models/movie";
import { MovieService } from "../../services/movie.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NguCarousel } from '@ngu/carousel';

@Component({
    selector: "welcome",
    templateUrl: "welcome.html",
    styleUrls: ["./welcome.css"]
})


export class WelcomeComponent implements OnInit {
    movieList: Movie[];
    movie: Movie
    itemWidthPer: number;

    navigateToDetails(id: string) {
        this.router.navigate(["movie-details", id]);
    }
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private movieService: MovieService,
        ) {
    

    }
    public carouselOne: NguCarousel;
    ngOnInit() {
        this.movieService.getAll().subscribe(data => {
            this.movieList = data
            
        });
        this.carouselOne = {
            grid: {xs: 10, sm: 10, md: 10, lg: 10, all: 0},
            slide: 1,
            speed: 1000,
            interval: 1000,
            point: {
              visible: false
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
            
          }
          
    }
    radnomID(){
   
        var randomMovie2 = this.movieList[Math.floor(Math.random()* this.movieList.length)].id
       
         this.router.navigate(["movie-details", randomMovie2]);
   }
      
}