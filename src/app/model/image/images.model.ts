import { FixedHeight, FixedWidth } from './fixed.model';

export class Image {
    id = '';
    title = '';
    type = '';
    url = '';
    embed_url = '';
    fixed_height: FixedHeight;
    fixed_width: FixedWidth;

    constructor() {
        this.fixed_height = new FixedHeight();
        this.fixed_width = new FixedWidth();
    }
}
