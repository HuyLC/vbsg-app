import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PictureService {

  constructor (private http: HttpClient) {}
  getPictures(group_id, url_paging) {
    const access_token =  `EAAAAUaZA8jlABAOonkEwcdAySnvnYjFrtHQ0L3cDpCZCB9msffm0
                          r4ZA01GX5QEHrO42QVSFraAlQxu1Xpa3oTXJsEhfl8V0nZCtngTs3b
                          TvLXNnzZAWKLNE3KxZAk5Y55Y2EVeeQnyKGUGZAxIuukZBgUleCzZA6c5QZD`;
    let url = '';
    if (url_paging) {
      url = url_paging;
    }else {
      url = `https://graph.facebook.com/v2.10/${group_id}/feed?fields=id,
            full_picture,created_time,message,likes,from,place,object_id&limit=16
            &access_token=${access_token}`;
    }
    return this.http.get<any>(url);
  }
}
