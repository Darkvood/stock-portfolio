import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() menuToggleable: string;
  @Output() toggleAside: EventEmitter<void> = new EventEmitter();

  toggleSideBar(): void {
    this.toggleAside.emit();
  }
}
