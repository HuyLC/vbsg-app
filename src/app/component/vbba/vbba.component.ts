import { Component, OnInit } from '@angular/core';
import { PictureService } from '../../picture.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-vbba',
  templateUrl: './vbba.component.html',
  styleUrls: ['./vbba.component.css']
})
export class VbbaComponent implements OnInit {
  pictures = [];
  vbba_id = 282411435476949;
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
        .getPictures(this.vbba_id, this.paging)
        .subscribe(
          (pictures) => {
            this.pictures = this.pictures.length === 0 ? pictures.data : this.pictures.concat(pictures.data) ;
            this.paging = pictures.paging.next;
          },
          (err) => { console.log('error', err); }
        );
  }

}
