import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $('.collection a').on('click', function() {
      $('.collection a i.material-icons').removeClass('selected');
      $(this).find('i.material-icons').addClass('selected');
    });
  }
}
