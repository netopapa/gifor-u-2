import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';

import { Constant } from '../../constants';
import { RequestSearchObject, ResponseObject, RequestParam } from '../../model/util/util.model';
import { RestService } from '../rest-service/rest.service';

@Injectable()
export class GifService extends RestService {

  api_key = Constant.API_KEY;
  searchURL = Constant.BASE_URL;

  constructor(http: Http) {
    super(http);
  }

  public getGifs(req: RequestSearchObject): Observable<ResponseObject> {
    let params: RequestParam[];

    params = [
      { param: this.api_key, paramName: 'api_key' },
      { param: req.lang, paramName: 'lang' },
      { param: req.limit, paramName: 'limit' },
      { param: req.offset, paramName: 'offset' },
      { param: req.q, paramName: 'q' },
      { param: req.rating, paramName: 'rating' }
    ];

    return this.get(this.searchURL, params);
  }

}
