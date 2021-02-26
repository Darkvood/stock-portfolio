import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { CollectionsComponent } from "./pages/collections/collections.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "collections", component: CollectionsComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
