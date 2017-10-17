import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BusinessPlanComponent } from './business-plan/business-plan.component';
import { CompactViewComponent } from './business-plan/compact-view/compact-view.component';
import { ExpandedViewComponent } from './business-plan/expanded-view/expanded-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BusinessPlanComponent,
    CompactViewComponent,
    ExpandedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    CompactViewComponent,
    ExpandedViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
