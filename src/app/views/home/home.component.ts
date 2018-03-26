import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GifService } from '../../services/gif/gif.service';
import { Gif } from '../../model/gif/gif.model';
import { RequestSearchObject } from '../../model/util/util.model';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private gifList: Gif[];

  constructor(
    private gifService: GifService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.gifList = [];

    this.route.params.subscribe(
      (params: any) => {
        if (params['q'] != null) {
          console.log(params['q']);
        } else {
          console.log(`padrao`);
        }
      }
    );
  }

  ngAfterViewInit(): void {
  }

  searchForGifs(query: string, limit: number, offset: number): void {
    const options: RequestSearchObject = new RequestSearchObject();
    options.q = query;
    this.gifService.getGifs(options).subscribe(
      success => {
        this.gifList = success.data;
        console.log(this.gifList);
      },
      error => {
        console.log(error);
      }
    );
  }
}
