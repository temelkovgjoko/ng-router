import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ComposeMessageComponent } from "./compose-message/compose-message.component";

const appRoutes: Routes = [
  { path: "compose", component: ComposeMessageComponent, outlet: "popup" },
  {
    path: "crisis-center",
    loadChildren: () =>
      import("./crisis-center/crisis-center.module").then(
        mod => mod.CrisisCenterModule
      ),
    data: { preload: true }
  },
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
