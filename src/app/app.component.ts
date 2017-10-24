import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FacebookService, InitParams } from 'ngx-facebook';

interface DataResponse{
  data: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // 1173636692750000
  // 295900874186826
  imgs: any;
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<DataResponse>('https://graph.facebook.com/v2.10/1173636692750000/feed?fields=id,full_picture,created_time,message,likes,from,place,object_id&limit=500&access_token=EAAAAUaZA8jlABANZBfQhn4rw9ZBZCRO1TRv2NcEyecrq88tOKgj9mkxkColJmVx8DsN4a0y1yBy9zoEhPqTtHCcuOVDj99uBMy6RtuROX9DYTkZCGjpiTrkfaAxpMkcZC8OP97QaLuEKVX7MzixKf6LTlsiQmLlWkZD')
    .subscribe(
      data => {
         this.imgs = data.data;
      }
  );
  }
}
