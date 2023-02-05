import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrywhenComponent } from './retrywhen.component';

describe('RetrywhenComponent', () => {
  let component: RetrywhenComponent;
  let fixture: ComponentFixture<RetrywhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrywhenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrywhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
