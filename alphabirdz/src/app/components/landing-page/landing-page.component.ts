import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }
  mobile: boolean = true;
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = true;
        } else {
          this.mobile = false;
        }
      });
  }

}
