import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisCenterComponent } from "./crisis-center/crisis-center.component";
import { CrisisCenterHomeComponent } from "./crisis-center-home/crisis-center-home.component";

const heroesRoutes: Routes = [
  {
    path: "",
    component: CrisisCenterComponent,
    children: [
      {
        path: "",
        component: CrisisListComponent,
        children: [
          {
            path: ":id",
            component: CrisisDetailComponent
          },
          {
            path: "",
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
