import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearDoctorPage } from './crear-doctor.page';

describe('CrearDoctorPage', () => {
  let component: CrearDoctorPage;
  let fixture: ComponentFixture<CrearDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
