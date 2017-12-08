import { Component, OnInit } from '@angular/core';
import { PictureService } from '../../picture.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  pictures = [];
  bag_id = 295900874186826;
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
        .getPictures(this.bag_id, this.paging)
        .subscribe(
          (pictures) => {
            this.pictures = this.pictures.length === 0 ? pictures.data : this.pictures.concat(pictures.data) ;
            this.paging = pictures.paging.next;
          },
          (err) => { console.log('error', err); }
        );
  }
}
