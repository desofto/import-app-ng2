import { Directive, ElementRef, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[focus-me]'
})

export class FocusMe implements AfterContentChecked {
  private focused = false;

  constructor(
    private elementRef: ElementRef
  ) {}

  ngAfterContentChecked() {
    if(!this.focused) {
      var el = this.elementRef.nativeElement;
      (el.querySelector('div[contenteditable="true"],input') || el).focus();
      this.focused = true;
    }
  }
}
