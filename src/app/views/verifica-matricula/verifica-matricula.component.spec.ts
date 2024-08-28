import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaMatriculaComponent } from './verifica-matricula.component';

describe('VerificaMatriculaComponent', () => {
  let component: VerificaMatriculaComponent;
  let fixture: ComponentFixture<VerificaMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificaMatriculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificaMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
