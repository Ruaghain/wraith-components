import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WraithInputComponent } from './wraith-input.component';
import { By } from '@angular/platform-browser';

describe('WraithInput', () => {

  let component: WraithInputComponent;
  let fixture: ComponentFixture<WraithInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WraithInputComponent
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(WraithInputComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('component is an instance of WraithInput', () => {
    expect(component instanceof WraithInputComponent).toBeTruthy();
  });

  let inputTypes = [
    { label: 'Username:', type: 'text', name: 'username', placeholder: 'Enter Username' },
    { label: 'Gender:', type: 'radio', name: 'gender', placeholder: '' }
  ];
  inputTypes.forEach((input) => {
    describe('displays', () => {
      it('a ' + input.type + ' input', () => {
        component.label = input.label;
        component.type = input.type;
        component.name = input.name;
        if (input.placeholder) {
          component.placeholder = input.placeholder;
        }
        fixture.detectChanges();
        let inputLabel = fixture.debugElement.query(By.css('label')).nativeElement as HTMLLabelElement;
        let inputType = fixture.debugElement.query(By.css('input')).nativeElement;

        expect(inputType.name).toEqual(input.name);
        expect(inputType.type).toEqual(input.type);
        expect(inputLabel.htmlFor).toEqual(input.name);
        expect(inputLabel.innerText.trim()).toEqual(input.label);
      });
    });
  });
});