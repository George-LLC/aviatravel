import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import {CarouselModule} from 'primeng/carousel';
import {AccordionModule} from 'primeng/accordion';
// import { AccordionModule } from 'ngx-bootstrap/accordion';


import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IncomingtoursPageComponent } from './incomingtours-page/incomingtours-page.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {GalleriaModule} from 'primeng/galleria';
import {PaginatorModule} from 'primeng/paginator';
import {DataViewModule} from 'primeng/dataview';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelModule} from 'primeng/panel';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';





export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    IncomingtoursPageComponent,
    HeaderComponent
  ],


  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    CarouselModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GalleriaModule,
    PaginatorModule,
    DataViewModule,
    ScrollPanelModule,
    PanelModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // CarouselModule.forRoot(),
    ModalModule.forRoot()
    // AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
