import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DefaultComponent } from "./default/default.component";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [DefaultComponent],
  exports: [DefaultComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule]
})
export class LayoutModule {}
