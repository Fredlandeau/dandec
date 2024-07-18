import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantProposComponent } from './avant-propos.component';

describe('AvantProposComponent', () => {
  let component: AvantProposComponent;
  let fixture: ComponentFixture<AvantProposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvantProposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvantProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
