import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroesRoutingModule } from "./crises-routing.module";
import { FormsModule } from "@angular/forms";
import { HeroListComponent } from "./crisis-list/crisis-list.component";
import {
  HeroDetailComponent,
  CrisisDetailComponent
} from "./crisis-detail/crisis-detail.component";
import { CrisisListComponent } from "../crisis-list/crisis-list.component";
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

@NgModule({
  declarations: [CrisisListComponent, CrisisDetailComponent, CrisisCenterComponent, CrisisCenterHomeComponent],
  imports: [CommonModule, oruti, FormsModule]
})
export class HeroesModule {}
