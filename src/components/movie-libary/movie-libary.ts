import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { Movie } from "../../models/movie";
import { Router, ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service"
import { AddDvdComponent } from "../add-dvd"
@Component({
    selector: "movie-libary",
    templateUrl: "./movie-libary.html",
    styleUrls: ["./movie-libary.css"]
})


export class MovieLibaryComponent implements OnInit {
    movieList: Movie[];
    movie: Movie
    navigateToEdit(id: string) {
        this.router.navigate(["add-dvd", id]);
    }

    navigateToDetails(id: string) {
        this.router.navigate(["movie-details", id]);
    }

   
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private movieService: MovieService) {

    }

    ngOnInit() {
        this.movieService.getAll().subscribe(data => {
            this.movieList = data
        });

    }
    deleteMovie(id) {
        this.movieService.deleteMovie(id)
            .subscribe(data => {
                alert("Movie is Deleted")
                this.router.navigate(["add-dvd"]) 
            })     
    }
};


