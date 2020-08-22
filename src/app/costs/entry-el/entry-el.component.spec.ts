import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryElComponent } from './entry-el.component';

describe('EntryElComponent', () => {
  let component: EntryElComponent;
  let fixture: ComponentFixture<EntryElComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryElComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
