import { switchMap } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";

import { HeroService, CrisisService } from "../crisis.service";
import { Crisis } from "../crisis";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./crisis-detail.component.html",
  styleUrls: ["./crisis-detail.component.css"]
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getCrisis(params.get("id")))
    );
  }

  goToHeroes(crisis: Crisis) {
    let crisisId = crisis ? crisis.id : null;
    this.router.navigate(["/crises", { id: crisisId, foo: "foo" }]);
  }
}
