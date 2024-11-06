import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecesitoComponent } from './necesito.component';

describe('NecesitoComponent', () => {
  let component: NecesitoComponent;
  let fixture: ComponentFixture<NecesitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NecesitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NecesitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
