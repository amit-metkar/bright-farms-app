import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
import { WindowRefService } from './shared/services/window-ref.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

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
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (HttpLoaderFactory),
          deps: [HttpClient]
      }
  })
  ],
  providers: [WindowRefService],
  entryComponents: [
    CompactViewComponent,
    ExpandedViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
