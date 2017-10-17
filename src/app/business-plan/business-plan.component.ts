import { ExpandedViewComponent } from './expanded-view/expanded-view.component';
import { CompactViewComponent } from './compact-view/compact-view.component';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-plan',
  templateUrl: './business-plan.component.html',
  styleUrls: ['./business-plan.component.scss']
})
export class BusinessPlanComponent implements OnInit {
  dynamicComponent: Component = CompactViewComponent;

  constructor() {
    if (window.innerWidth > 768) {
      this.dynamicComponent = ExpandedViewComponent;
    }
  }

  ngOnInit() {}

  @HostListener('window:resize', ['$event']) onresize(event) {
    if (event.target.innerWidth > 768) {
      this.dynamicComponent = ExpandedViewComponent;
    } else {
      this.dynamicComponent = CompactViewComponent;
    }
  }
}
