import { Component,AfterContentInit, ContentChildren,QueryList} from "@angular/core"
import { HtmlControlTemplateDirective } from '../directives/html-control-template.directive';

@Component({
  template:'',
  selector:'rxweb-dynamic-form',
  exportAs: 'rxwebForm'
})
export class RxwebDynamicFormComponent implements AfterContentInit {
  @ContentChildren(HtmlControlTemplateDirective) htmlControlTemplates: QueryList<HtmlControlTemplateDirective>;

  ngAfterContentInit() {
  }

  
}

