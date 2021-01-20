import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarPacientePage } from './editar-paciente.page';

describe('EditarPacientePage', () => {
  let component: EditarPacientePage;
  let fixture: ComponentFixture<EditarPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
