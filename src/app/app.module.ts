import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

import { AppComponent } from './app.component';
import { PictureService } from './picture.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerModule } from 'angular2-spinner/dist';
import { VbsgComponent } from './component/vbsg/vbsg.component';
import { VbbaComponent } from './component/vbba/vbba.component';
import { BagComponent } from './component/bag/bag.component';
import { IndexComponent } from './index/index.component';

const groupRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'vsbg',
    component: VbsgComponent
  },
  {
    path: 'vbba',
    component: VbbaComponent
  },
  {
    path: 'bag',
    component: BagComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    VbsgComponent,
    VbbaComponent,
    BagComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    SpinnerModule,
    RouterModule.forRoot(groupRoutes)
  ],
  providers: [
    PictureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
