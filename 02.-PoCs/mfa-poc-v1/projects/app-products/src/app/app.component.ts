import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-products';

  private router=inject(Router);

   @HostListener('window:routeChanged', ['$event'])
       onRouteChanged(event: any) {
        console.log('routeChanged')
        this.router.navigate([event.detail.route], event.detail.extras);
       }

}
