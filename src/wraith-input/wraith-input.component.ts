import { Component } from '@angular/core';

@Component({
  selector: 'wraith-input',
  styleUrls: ['./wraith-input.component.scss'],
  templateUrl: 'wraith-input.component.html',
  inputs: ['name', 'label', 'type', 'placeholder']
})
export class WraithInputComponent {
  name: String;
  label: String;
  type: String;
  placeholder: String;
}