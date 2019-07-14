import { NarikPrimeTabOutletModule } from "narik-ui-primeng";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  NbActionsModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbSidebarService,
  NbUserModule
} from "@nebular/theme";

import { COMPONENTS } from "./index";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbActionsModule,
    NbCardModule,
    NbContextMenuModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbSidebarModule,
    NbIconModule,
    NbUserModule,
    NarikPrimeTabOutletModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [NbSidebarService]
})
export class NarikNgxAdmin {}
