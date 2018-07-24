import { TestBed, ComponentFixture } from '@angular/core/testing';
import { } from 'jasmine';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule
        
      ],
      declarations: [AppComponent]
    });
  });
  it('should work', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});

