import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplataBindingComponent } from './template-binding.component';

describe('TemplataBindingComponent', () => {
  let component: TemplataBindingComponent;
  let fixture: ComponentFixture<TemplataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplataBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
