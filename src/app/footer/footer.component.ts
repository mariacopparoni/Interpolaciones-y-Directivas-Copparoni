import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  //templateUrl: './footer.component.html',
  template: ` <footer style="margin-left: 200px;">Seguinos en nuestras Redes!</footer> `,
  // styleUrls: ['./footer.component.scss'],
  styles: [
    `
      footer {
        display: flex;
        height: var(--footer-height);
        background-color: #6DDAF2;
        justify-content: right;
      }
    `,
  ],
})
export class FooterComponent {}
