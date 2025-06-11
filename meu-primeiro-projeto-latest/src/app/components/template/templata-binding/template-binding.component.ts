import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
})
export class TemplateBindingComponent {
  public items: string[] = [
    'Item 1', 
    'Item 2'
  ]
  public mostrarMensagem: boolean = true;
  public name: string = 'Dener Torquatte';
  public name2: string = 'leandro';
  public age: number = 32;
  public isDisabled: boolean = false;
  public srcValue: string =
    'https://img.freepik.com/vetores-gratis/ilustracao-de-astronauta-super-voador-fofo_138676-3277.jpg?t=st=1745803357~exp=1745806957~hmac=cf8ca9d49c3226640a136cffb9228e0a724c58afa25d3da6199fe51ed0c5ccbd&w=740';

  public sum(val1: number, val2: number): number {
    return val1 + val2;
  }

  public sum2(): number {
    return this.age++;
  }

  public sub(): number {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    console.log(event);
  }

  public onMouseMove(event: any) {
    console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
}
