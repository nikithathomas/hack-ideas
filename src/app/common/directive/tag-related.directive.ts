import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTagRelated]'
})
export class TagRelatedDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
