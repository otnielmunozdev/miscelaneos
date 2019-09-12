import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,


  //esta parte solo afecta a el componente que se declara aqui

  styles: [` 
    p{
      font-size:20px; 
    }
  
  
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
