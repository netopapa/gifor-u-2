import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../model/gif/gif.model';

declare var $: any;

@Component({
  selector: 'app-gif-item',
  templateUrl: './gif-item.component.html',
  styleUrls: ['./gif-item.component.css']
})
export class GifItemComponent implements OnInit {

  @Input() gif: Gif = new Input();

  constructor() { }

  ngOnInit() {
  }

  showGifInfo(e: any): void {
    e.target.childNodes[3].classList.add('hovered');
  }

  hideGifInfo(e: any): void {
    e.target.childNodes[3].classList.remove('hovered');
  }

}
