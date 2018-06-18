import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: number = Date.now();
  constructor(private router: Router){

  }
  navigateToRoute(routeKey: string): void {
    this.router.navigate([ routeKey ])
  }
 
}