import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/templata-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from "./components/template/template-control-flow/template-control-flow.component";
import { TemplateDeferrableViewsComponent } from './components/template-deferrable-views/template-deferrable-views.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewComponentComponent, 
    TemplateBindingComponent, 
    TemplateVariablesComponent, 
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent],
  template:`<!-- <router-outlet></router-outlet> -->
  <h1>Angular</h1>
  <!-- <app-new-component/> -->
   <app-template-binding/>
   <app-template-variables/>
  <app-template-control-flow/>
  <app-template-deferrable-views/>
 
 ` , 
  
  })
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}

