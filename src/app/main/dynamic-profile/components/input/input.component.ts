import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig2 } from '../../field.interface';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig2;
  group: FormGroup;
  constructor() {}
  ngOnInit(): void {}
}
