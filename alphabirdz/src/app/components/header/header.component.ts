import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mobile!: boolean;
  _reload: boolean = true;
  menuOpen: boolean = false;
  userOpen: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

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

  openMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.userOpen == true) this.userOpen = false
  }

  openUser() {
    this.userOpen = !this.userOpen;
    if (this.menuOpen == true) this.menuOpen = false
  }

  public reload() {
    !this._reload
  }

}
