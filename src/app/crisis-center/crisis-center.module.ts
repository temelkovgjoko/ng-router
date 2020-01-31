import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HeroesRoutingModule } from "./crisis-center-routing.module";
import { CrisisCenterComponent } from "./crisis-center/crisis-center.component";
import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisCenterHomeComponent } from "./crisis-center-home/crisis-center-home.component";

@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],
  imports: [CommonModule, HeroesRoutingModule, FormsModule]
})
export class CrisisCenterModule {}
