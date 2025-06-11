import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public itens: Array<{name: string}> = [{name: 'Leandro'}, {name: 'Lucas'}, {name: 'Luan'}];
  public isTrue: boolean = false;
public switchCondition: string = 'A';

  public loadingData$:Observable<string[]> = of(
    ['item1', 'item2', 'item3']).pipe(delay(3000));

    public trackByFn(index: number): number {
      return index;
    }

    public addNewName(value: string)  {
       this.itens.push({name: value});
    }

}