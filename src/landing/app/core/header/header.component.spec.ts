import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../core.module';
import { HeaderComponent } from './header.component';

describe('Header Component ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule
        
      ]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<HeaderComponent> = TestBed.createComponent(HeaderComponent);
    expect(fixture.componentInstance instanceof HeaderComponent).toBe(true, 'should create Header');
  });
});

