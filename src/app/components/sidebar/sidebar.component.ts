import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $('.collection a').on('click', function () {
      $('.collection a i.material-icons').removeClass('selected');
      $(this).find('i.material-icons').addClass('selected');
    });
    const colors = new Array(
      [62, 35, 255],
      [60, 255, 60],
      [255, 35, 98],
      [45, 175, 230],
      [255, 0, 255],
      [255, 128, 0]);

    let step = 0;
    // color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    const colorIndices = [0, 1, 2, 3];

    // transition speed
    const gradientSpeed = 0.002;

    function updateGradient() {

      if ($ === undefined) { return; }

      const c0_0 = colors[colorIndices[0]];
      const c0_1 = colors[colorIndices[1]];
      const c1_0 = colors[colorIndices[2]];
      const c1_1 = colors[colorIndices[3]];

      const istep = 1 - step;
      const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      const color1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';

      const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      const color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';

      $('#sidebar').css({
        background: '-webkit-gradient(linear, left top, right top, from(' + color1 + '), to(' + color2 + '))'
      }).css({
        background: '-moz-linear-gradient(left, ' + color1 + ' 0%, ' + color2 + ' 100%)'
      });

      step += gradientSpeed;
      if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        // pick two new target color indices
        // do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

      }
    }

    setInterval(updateGradient, 10);
  }

  private searchTheseGifs(q: string): void {
    this.router.navigate([`/home/${q}`]);
  }
}
