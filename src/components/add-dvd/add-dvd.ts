import { Component, Input, OnInit, ViewChild } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router"
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { MovieService } from "../../services/movie.service";
import { Movie } from "../../models/movie";
import { DomSanitizer } from "@angular/platform-browser"
@Component({
    selector: "add-dvd",
    templateUrl: "./add-dvd.html",
    styleUrls: ['./add-dvd.css']
})


export class AddDvdComponent {


    constructor(private fb: FormBuilder,
        private movieService: MovieService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer) {
           
    }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params["id"];
        if (id) {
            this.movieService.get(id).subscribe(data => {
                if (data) {
                    this.movie = data;
                    this.movieForm.setValue({
                        dvdNumber: data.dvdNumber, movieTitle: data.movieTitle, year: data.year,
                        time: data.time, genre: data.genre, coverUrl: data.coverUrl, trailerUrl: data.trailerUrl, cast: data.cast, id: data.id
                    });

                }
            });
        } else {
            this.movie = Movie.empty();
        }

    }
    
    movieForm: FormGroup = this.fb.group({
        movieTitle: ["", [Validators.required]],
        dvdNumber: ["", [Validators.required]],
        genre: [""],
        time: [""],
        year: [""],
        coverUrl: [""],
        trailerUrl: [""],
        cast: [""],
        id: [""]
    });

    
    createMovie(e): void {

        this.movie.movieTitle = this.movieForm.value["movieTitle"];
        this.movie.dvdNumber = this.movieForm.value["dvdNumber"];
        this.movie.cast = this.movieForm.value["cast"];
        this.movie.genre = this.movieForm.value["genre"];
        this.movie.time = this.movieForm.value["time"];
        this.movie.year = this.movieForm.value["year"];
        this.movie.coverUrl = this.movieForm.value["coverUrl"];
        this.movie.trailerUrl = this.movieForm.value["trailerUrl"];
        this.movie.id = this.movieForm.value["id"]
        console.log(this.movie);

        if (this.movie.id) {
            this.movieService.update(this.movie).subscribe(data => {
                if (data) {
                    this.router.navigate(["add-dvd"]);
                } else {
                    alert("something went wrong");
                }
            });
        } else {
            this.movieService.create(this.movie).subscribe(data => {
                if (data) {
                    this.router.navigate(["movie-libary"]);
                } else {
                    alert("something went wrong");
                }
            });
        };
    };
    

    @Input() movie: Movie = Movie.empty();

}