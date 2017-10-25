import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PictureService {
  // 1173636692750000 vsbg
  // 295900874186826 bag
  constructor (private http: HttpClient) {}
  getPictures(url_paging) {
    let access_token = 'EAAAAUaZA8jlABANZBfQhn4rw9ZBZCRO1TRv2NcEyecrq88tOKgj9mkxkColJmVx8DsN4a0y1yBy9zoEhPqTtHCcuOVDj99uBMy6RtuROX9DYTkZCGjpiTrkfaAxpMkcZC8OP97QaLuEKVX7MzixKf6LTlsiQmLlWkZD';
    let url = '';
    if (url_paging) {
      url = url_paging;
    }else {
      url = 'https://graph.facebook.com/v2.10/1173636692750000/feed?fields=id,full_picture,created_time,message,likes,from,place,object_id&limit=16&access_token=' + access_token;
    }
    return this.http.get<any>(url);
  }
}
