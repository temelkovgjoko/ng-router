import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisCenterComponent } from "./crisis-center/crisis-center.component";
import { CrisisCenterHomeComponent } from "./crisis-center-home/crisis-center-home.component";
import { CanDeactivateGuard } from "../can-deactivate.guard";
import { CrisisDetailResolverService } from "./crisis-detail-resolver.service";

const crisisRoutes: Routes = [
  {
    path: "crisis-center",
    component: CrisisCenterComponent,
    children: [
      {
        path: "",
        component: CrisisListComponent,
        children: [
          {
            path: ":id",
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolverService
            }
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
  imports: [RouterModule.forChild(crisisRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
