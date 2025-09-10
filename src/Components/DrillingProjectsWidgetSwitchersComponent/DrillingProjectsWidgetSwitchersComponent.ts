import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NzSwitchModule } from "ng-zorro-antd/switch";
//TODO перенести в модуль для инструмента проектов бурения
@Component({
  selector: "DrillingProjectsWidgetSwitchersComponent",
  templateUrl: "DrillingProjectsWidgetSwitchersComponent.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzSwitchModule],
})
export default class DrillingProjectsWidgetSwitchersComponent {}
