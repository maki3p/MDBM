import {Routes } from "@angular/router"
import {AddDvdComponent,WelcomeComponent,MovieLibaryComponent,MovieDetailsComoponent} from "../components";


export const routes: Routes = [
    
    {
        path: 'add-dvd', 
        component: AddDvdComponent
    },
    {
        path:"movie-libary",
        component:MovieLibaryComponent
    },
    {
        path: 'add-dvd/:id', 
        component: AddDvdComponent
    },
    {
        path:"movie-details/:id",
        component: MovieDetailsComoponent
    },
    {
        path:"**",
        component:WelcomeComponent
    }

]