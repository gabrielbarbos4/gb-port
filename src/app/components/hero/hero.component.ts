import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutoScrollService} from "../../service/auto-scroll.service";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [AutoScrollService]
})
export class HeroComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() { }
}
