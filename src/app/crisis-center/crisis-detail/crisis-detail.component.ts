import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { DialogService } from "src/app/dialog.service";

import { Crisis } from "../crisis";

@Component({
  selector: "app-crisis-detail",
  templateUrl: "./crisis-detail.component.html",
  styleUrls: ["./crisis-detail.component.css"]
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  cancel() {
    this.goToCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.goToCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm("Discard changes?");
  }

  goToCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // this.router.navigate(["/crises", { id: crisisId, foo: "foo" }]);
    this.router.navigate(["../", { id: crisisId, foo: "foo" }], {
      relativeTo: this.route
    });
  }
}
