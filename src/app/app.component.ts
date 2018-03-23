import { Component, OnInit } from '@angular/core';
import { GifService } from './services/gif/gif.service';
import { RequestSearchObject, ResponseObject } from './model/util/util.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private gifService: GifService
  ) { }

  ngOnInit(): void {
    const req: RequestSearchObject = new RequestSearchObject();
    req.limit = 10;
    req.q = 'code';
    this.gifService.getGifs(req).subscribe(
      success => {
        const resp: ResponseObject = success;
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }
}
