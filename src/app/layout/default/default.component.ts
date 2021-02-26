import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";

@Component({
  selector: "app-layout-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"]
})
export class DefaultComponent implements OnInit {
  sidebar = {
    active: true,
    toggleable: false
  };

  constructor(public breakpointObserver: BreakpointObserver) {
    this.changeSidebarModeIfNeeded = this.changeSidebarModeIfNeeded.bind(this);
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(this.changeSidebarModeIfNeeded);
  }

  toggleSidebar(): void {
    this.sidebar.active = !this.sidebar.active;
  }

  changeSidebarModeIfNeeded(state: BreakpointState): void {
    const forceOpen = !state.matches;

    if (forceOpen) {
      this.sidebar = { active: true, toggleable: false };
    } else {
      this.sidebar = { active: false, toggleable: true };
    }
  }
}
