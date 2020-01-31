import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { ComposeMessageComponent } from "./compose-message/compose-message.component";
import { HeroesModule } from "./heroes/heroes.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AdminModule,
    AuthModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, PageNotFoundComponent, ComposeMessageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
