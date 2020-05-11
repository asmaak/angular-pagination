import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
//  @Input() backgroundColor: string ;
  constructor(private element: ElementRef) {
    // console.log('appclass diective work');
    // this.element.nativeElement.style.color = 'red';
    // this.element.nativeElement.style.backgroundColor = this.backgroundColor;



  }
  // @Input() set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  // @Input() set appClass(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
    @Input('appClass') set backgroundColor(color: string) {
     this.element.nativeElement.style.backgroundColor = color;
   }

}
