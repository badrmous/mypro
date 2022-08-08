import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneNewComponent } from './personne-new.component';

describe('PersonneNewComponent', () => {
  let component: PersonneNewComponent;
  let fixture: ComponentFixture<PersonneNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
