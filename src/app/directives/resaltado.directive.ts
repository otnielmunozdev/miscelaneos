import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {


  constructor(private el:ElementRef) {

    // el.nativeElement.style.backgroundColor = "yellow";
    console.log("directiva");
  }

  @Input("appResaltado") nuevoColor:string; //la variable viene de afuera

  @HostListener('mouseenter') mouseEntro(){
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
    // this.el.nativeElement.style.backgroundColor = "yellow";

  }

  @HostListener('mouseleave') mouseSalio(){
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar(null);

  }

  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;

  }

}
