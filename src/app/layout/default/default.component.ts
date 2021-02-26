import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"]
})
export class DefaultComponent {
  sideBarOpen = true;

  toggleSideBar(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
