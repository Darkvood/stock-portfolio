import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default/default.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [DefaultComponent],
  exports: [DefaultComponent],
  imports: [CommonModule, AppRoutingModule]
})
export class LayoutModule {}
