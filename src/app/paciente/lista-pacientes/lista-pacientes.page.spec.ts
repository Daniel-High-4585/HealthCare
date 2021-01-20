import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaPacientesPage } from './lista-pacientes.page';

describe('ListaPacientesPage', () => {
  let component: ListaPacientesPage;
  let fixture: ComponentFixture<ListaPacientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPacientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
