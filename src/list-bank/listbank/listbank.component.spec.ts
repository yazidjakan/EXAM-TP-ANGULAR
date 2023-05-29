import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbankComponent } from './listbank.component';

describe('ListbankComponent', () => {
  let component: ListbankComponent;
  let fixture: ComponentFixture<ListbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
