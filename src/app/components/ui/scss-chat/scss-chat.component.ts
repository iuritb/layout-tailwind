import { Component } from '@angular/core';

@Component({
  selector: 'app-scss-chat',
  templateUrl: './scss-chat.component.html',
  styleUrl: './scss-chat.component.scss'
})
export class ScssChatComponent {
  this.messages = [
    { content: 'Este é um exemplo de **Markdown** com _LaTeX_: $E = mc^2$' },
    { content: 'Aqui vai uma fórmula complexa:\n\n$$\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$' }
  ];


}
