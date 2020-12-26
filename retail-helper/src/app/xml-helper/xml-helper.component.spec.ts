import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlHelperComponent } from './xml-helper.component';

describe('XmlHelperComponent', () => {
  let component: XmlHelperComponent;
  let fixture: ComponentFixture<XmlHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
