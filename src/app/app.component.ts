import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from "./components/hero/hero.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    ExperienceComponent,
    AboutMeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gb-port';
}
