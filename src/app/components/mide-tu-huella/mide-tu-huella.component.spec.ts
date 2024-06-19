import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MideTuHuellaComponent } from './mide-tu-huella.component';

describe('MideTuHuellaComponent', () => {
  let component: MideTuHuellaComponent;
  let fixture: ComponentFixture<MideTuHuellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MideTuHuellaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MideTuHuellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
