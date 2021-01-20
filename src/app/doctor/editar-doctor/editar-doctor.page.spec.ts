import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarDoctorPage } from './editar-doctor.page';

describe('EditarDoctorPage', () => {
  let component: EditarDoctorPage;
  let fixture: ComponentFixture<EditarDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
