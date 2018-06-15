export class Movie {
    id:string;
    dvdNumber: number;
    genre: string;
    year: number;
    time: number;
    movieTitle: string;
    cast: string;
    coverUrl: string;
    trailerUrl: string;

    public static empty(): Movie {
        return {
            id:null,
            dvdNumber: null ,
            genre: "",
            year: null,
            time: null,
            movieTitle: "",
            cast: "",
            coverUrl: "",
            trailerUrl: "",
        };
    }
}