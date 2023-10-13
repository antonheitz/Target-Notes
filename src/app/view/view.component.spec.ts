import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LockedComponent } from './locked/locked.component';
import { MainComponent } from './main/main.component';

import { ViewComponent } from './view.component';
import { RegisterComponent } from './locked/register/register.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewComponent, MainComponent, LockedComponent, RegisterComponent],
      providers: [],
      imports: [CommonModule, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});