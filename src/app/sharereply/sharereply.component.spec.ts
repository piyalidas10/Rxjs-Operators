import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharereplyComponent } from './sharereply.component';

describe('SharereplyComponent', () => {
  let component: SharereplyComponent;
  let fixture: ComponentFixture<SharereplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharereplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharereplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
