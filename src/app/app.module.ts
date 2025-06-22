import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/shared/component/navbar/navbar.component';
import { mobileProducts } from 'src/const/mobile';
import { MobileComponent } from 'src/shared/component/mobile/mobile.component';
import { MovieComponent } from 'src/shared/component/movie/movie.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MobileComponent,
    MovieComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
