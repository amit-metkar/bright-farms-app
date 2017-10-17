import {
  Location,
  PopStateEvent
} from '@angular/common';
import {
  NavigationEnd,
  NavigationStart,
  Router
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';

import {
  WindowRefService
} from './shared/services/window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  private _window: Window;

  constructor(private router: Router, private location: Location, private windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  }

  public ngOnInit(): void {
    // Reset and preserve scroll position on view navigation
    this.location.subscribe((event: PopStateEvent) => {
      this.lastPoppedUrl = event.url;
    });
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event.url !== this.lastPoppedUrl) {
          // console.log('Navigation Start: ' + event.url + ' scrollY: ' + this._window.scrollY);
          this.yScrollStack.push(this._window.scrollY);
        }
      } else if (event instanceof NavigationEnd) {
        if (event.url === this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          const scrollPosition: number = this.yScrollStack.pop();
          // console.log('Navigation End: ' + event.url + ' scrollY: ' + scrollPosition);
          this._window.scrollTo(0, scrollPosition);
        } else {
          this._window.scrollTo(0, 0);
        }
      }
    });
  }
}
