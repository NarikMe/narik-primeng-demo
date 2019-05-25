import { NarikCommonModule } from "narik-common";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { NarikPrimeBusyIndicatorModule } from "narik-ui-primeng";
import { NarikPrimeButtonModule } from "narik-ui-primeng";
import { NarikPrimeInputModule } from "narik-ui-primeng";
import { ChangePassComponent } from "./change-password/change-password.component";
import { COMPONENTS } from "./index";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule.forChild(),
    FormsModule,
    NarikPrimeInputModule,
    NarikPrimeButtonModule,
    NarikPrimeBusyIndicatorModule,
    NarikCommonModule
  ],
  declarations: [COMPONENTS],
  exports: [],
  providers: [],
  entryComponents: [ChangePassComponent]
})
export class MainModule {}
