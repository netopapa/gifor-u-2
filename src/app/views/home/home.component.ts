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

  gifList1: Gif[];
  gifList2: Gif[];
  gifList3: Gif[];
  queryList: string[];

  constructor(
    private gifService: GifService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cleanLists();

    this.route.params.subscribe(
      (params: any) => {
        if (params['concat'] != null) {
          console.log(params['q']);
          this.concatTheQuery(params['q']);
        } else if (params['q'] != null) {
          this.cleanLists();
          this.searchForGifs(params['q'], 12, 0);
        } else {
          this.searchForGifs('code', 12, 0);
        }
      }
    );
  }

  ngAfterViewInit(): void {
  }

  private searchForGifs(query: string, limit: number, offset: number): void {
    const options: RequestSearchObject = new RequestSearchObject();
    options.q = query;
    options.q = query;
    options.offset = offset;
    this.gifService.getGifs(options).subscribe(
      success => {
        this.addToLists(success.data);
      },
      error => {
        console.log(error);
      }
    );
  }

  private addToLists(gifList: Gif[]): void {
    for (let i = 0; i < gifList.length; i += 4) {
      this.gifList1.push(gifList[i]);
      if (i + 1 < gifList.length) {
        this.gifList2.push(gifList[i + 1]);
      }
      if (i + 2 < gifList.length) {
        this.gifList3.push(gifList[i + 2]);
      }
    }
  }

  private cleanLists(): void {
    this.gifList1 = [];
    this.gifList2 = [];
    this.gifList3 = [];
    this.queryList = [];
  }

  private cleanGifLists(): void {
    this.gifList1 = [];
    this.gifList2 = [];
    this.gifList3 = [];
  }

  private concatTheQuery(newQuery: string): void {
    this.cleanGifLists();
    this.queryList.push(newQuery);
    let query = '';
    this.queryList.forEach(q => {
      query += `+${q}`;
    });
    this.searchForGifs(query, 12, 0);
  }

  private removeThisQuery(index: number): void {
    this.queryList.splice(index, 1);
    this.cleanGifLists();
    if (this.queryList.length > 0) {
      let query = '';
      this.queryList.forEach(q => {
        query += `+${q}`;
      });
      this.searchForGifs(query, 12, 0);
    } else {
      this.searchForGifs('code', 12, 0);
    }
  }
}
