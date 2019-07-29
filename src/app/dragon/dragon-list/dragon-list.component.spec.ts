import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { DragonListComponent } from './dragon-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragonService } from '../dragon.service';
import { AuthService } from '../../login/auth/auth.service';

describe('Dragon List Component', () => {
  let component: DragonListComponent;
  let fixture: ComponentFixture<DragonListComponent>;
  let authService: AuthService;
  let dataService: DragonService;
  let spy: jasmine.Spy;
  
  let mockedData: any =
    [{
      createdAt: new Date('2019-08-01'),
      histories: [],
      id: "1",
      name: "Super Dragon",
      type: "Fire"
    }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        HttpClientTestingModule
      ],
      declarations: [DragonListComponent],
      providers: [DragonService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonListComponent);
    component = fixture.debugElement.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h4 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Dragons List');
  });

  it('should fetch dragon data and update list template', async(() => {
    authService.login();
    dataService = fixture.debugElement.injector.get(DragonService);
    spy = spyOn(dataService, 'getDragons').and.returnValue(of(mockedData));
    component.ngOnInit();
    const compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.dragonList.length).toEqual(1);
      expect(component.dragonList[0].name).toBe('Super Dragon');
      expect(compiled.querySelector('.name-link > a').getAttribute('href')).toEqual('/dragon-list/1');
      expect(compiled.querySelector('.list-action-icons > a').getAttribute('href')).toEqual('/dragon-list/1/edit');
      expect(component.isLoading).toBe(false);
    });
  }));

});