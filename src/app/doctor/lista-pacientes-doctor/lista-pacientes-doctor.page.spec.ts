import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaPacientesDoctorPage } from './lista-pacientes-doctor.page';

describe('ListaPacientesDoctorPage', () => {
  let component: ListaPacientesDoctorPage;
  let fixture: ComponentFixture<ListaPacientesDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPacientesDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPacientesDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
