import { Component, OnInit, ViewChild, Input,Inject,ViewEncapsulation } from "@angular/core";
import { Movie } from "../../models/movie";
import { Router, ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: "movie-libary",
    templateUrl: "./movie-libary.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./movie-libary.css"]
})



export class MovieLibaryComponent implements OnInit {
    movieList: Movie[];
    movie: Movie
    closeResult: string;
    navigateToEdit(id: string) {
        this.router.navigate(["add-dvd", id]);
    }

    navigateToDetails(id: string) {
        this.router.navigate(["movie-details", id]);
    }

   
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private movieService: MovieService,
        private modalService: NgbModal) {

    }
    openSm(content) {
        this.modalService.open(content, { size: 'lg' });
        
      }
    
    ngOnInit() {
        this.movieService.getAll().subscribe(data => {
            this.movieList = data
        });

    }
    public deleteMovie(id) {
        this.movieService.deleteMovie(id)
            .subscribe(data => {
                alert("Movie is Deleted")
                this.movieService.getAll().subscribe(data => {
                    this.movieList = data
                });
                
            })     
    }
};


