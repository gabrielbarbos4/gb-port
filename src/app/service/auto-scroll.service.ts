import { Injectable } from '@angular/core';
import {BehaviorSubject, fromEvent, Observable} from "rxjs";

@Injectable()
export class AutoScrollService {

  lastScrollTop = new BehaviorSubject<null | number>(null);

  constructor() { }

  public detectScroll(element: HTMLElement): Observable<any> {
    return fromEvent(element, "click", {passive: false, capture: true});
  }
}
