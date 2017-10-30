import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PicturesListComponent } from './pictures-list/pictures-list.component';
import { PictureService } from './picture.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerModule } from 'angular2-spinner/dist';

@NgModule({
  declarations: [
    AppComponent,
    PicturesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    SpinnerModule
  ],
  providers: [
    PictureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
