import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var particlesJS: any;

@Component({
  selector: 'abc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample-app';

  ngOnInit(): void {
    particlesJS.load('particles', 'assets/particles.json', () => {
      console.log('particles.js loaded')
    })
  }
}
