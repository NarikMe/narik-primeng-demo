import { NarikBaseTemplate, DynamicForm } from "@narik/core";
import { Component, Injector } from "@angular/core";
import { NarikUiDetailForm } from "@narik/ui-primeng";

@DynamicForm("GeneralDetailComponent")
@NarikBaseTemplate("NarikDetailUi")
@Component({
  templateUrl: "general-detail.component.html"
})
export class GeneralDetailComponent extends NarikUiDetailForm<any> {
  constructor(injector: Injector) {
    super(injector);
  }
}
