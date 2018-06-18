import { Component, OnInit, ViewChild, Input, Inject, ViewEncapsulation } from "@angular/core";
import { Movie } from "../../models/movie";
import { Router, ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';


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
    private _success = new Subject<string>();
    staticAlertClosed = false;
    successMessage: string;

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

        setTimeout(() => this.staticAlertClosed = true, 20000);

        this._success.subscribe((message) => this.successMessage = message);
        this._success.pipe(
            debounceTime(5000)
        ).subscribe(() => this.successMessage = null);
    }


     deleteMovie(id) {
        this.movieService.deleteMovie(id)
            .subscribe(data => {
                this.movieService.getAll().subscribe(data => {
                    this.movieList = data
                });

            })
    }
    changeSuccessMessage() {
        
        this._success.next(`The Movie is DELETED.`);
    }
};


