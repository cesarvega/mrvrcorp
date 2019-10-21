import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrvrComponent } from './mrvr.component';

describe('MrvrComponent', () => {
  let component: MrvrComponent;
  let fixture: ComponentFixture<MrvrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrvrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
