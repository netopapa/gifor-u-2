import { Gif } from '../gif/gif.model';
import { Meta } from './meta.model';
import { Pagination } from './pagination.model';

export class ResponseObject {
    data: Gif[];
    meta: Meta;
    pagination: Pagination;

    constructor() { }
}

export class RequestSearchObject {
    api_key = '';
    q = '';
    limit = 25;
    offset = 0;
    rating = '';
    lang = '';

    constructor() { }
}

export class RequestParam {
    param: any;
    paramName: string;
}


