import { Component, OnInit } from '@angular/core';
import { Gif } from '../../model/gif/gif.model';

declare var $: any;

@Component({
  selector: 'app-gif-item',
  templateUrl: './gif-item.component.html',
  styleUrls: ['./gif-item.component.css']
})
export class GifItemComponent implements OnInit {

  private gif: Gif;

  constructor() { }

  ngOnInit() {
    this.gif = new Gif();
  }

  private showGifInfo(e: any): void {
    e.target.childNodes[3].classList.add('hovered');
  }

  private hideGifInfo(e: any): void {
    e.target.childNodes[3].classList.remove('hovered');
  }

}
