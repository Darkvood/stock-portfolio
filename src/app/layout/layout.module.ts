import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DefaultComponent } from "./default/default.component";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../material/material.module";
import { HeaderComponent } from "./default/header/header.component";

@NgModule({
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  declarations: [DefaultComponent, HeaderComponent],
  exports: [DefaultComponent]
})
export class LayoutModule {}
