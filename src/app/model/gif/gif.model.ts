import { Image } from '../image/images.model';

export class Gif {
    id = '';
    title = '';
    type = '';
    url = '';
    embed_url = '';
    images: Image;

    constructor() {
    }
}
