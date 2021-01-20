import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearPacientePage } from './crear-paciente.page';

describe('CrearPacientePage', () => {
  let component: CrearPacientePage;
  let fixture: ComponentFixture<CrearPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
