import {  DynamicForm } from "@narik/core";
import { Component, Injector } from "@angular/core";
import { NarikUiEditForm } from "@narik/ui-primeng";

@DynamicForm("GeneralEditComponent")
@Component({
  templateUrl: "general-edit.component.html"
})
export class GeneralEditComponent extends NarikUiEditForm<any> {
  constructor(injector: Injector) {
    super(injector);
  }
}
