import { Component, OnInit } from '@angular/core';
import { PictureService } from '../../picture.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-vbsg',
  templateUrl: './vbsg.component.html',
  styleUrls: ['./vbsg.component.css']
})
export class VbsgComponent implements OnInit {
  pictures = [];
  vsbg_id = 1173636692750000;
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
        .getPictures(this.vsbg_id, this.paging)
        .subscribe(
          (pictures) => {
            this.pictures = this.pictures.length === 0 ? pictures.data : this.pictures.concat(pictures.data) ;
            this.paging = pictures.paging.next;
          },
          (err) => { console.log('error', err); }
        );
  }
}
