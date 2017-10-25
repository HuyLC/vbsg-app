import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css']
})
export class PicturesListComponent implements OnInit {
  pictures = [];
  paging: any;

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
    this.getPictures();
  }

  onScroll () {
    this.getPictures();
  }
  private getPictures() {
    this.pictureService
        .getPictures(this.paging)
        .subscribe(pictures => {
          if (this.pictures.length === 0) {
            this.pictures = pictures.data;
          }else {
            this.pictures = this.pictures.concat(pictures.data);
          }
          this.paging = pictures.paging.next;
        });
  }
}
