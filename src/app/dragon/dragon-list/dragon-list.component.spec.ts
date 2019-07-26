import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DragonListComponent } from './dragon-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragonService } from '../dragon.service';

describe('Dragon List Component', () => {
  let component: DragonListComponent;
  let fixture: ComponentFixture<DragonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        HttpClientTestingModule
      ],
      declarations: [DragonListComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonListComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();    
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h4 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Dragons List');
  });
});